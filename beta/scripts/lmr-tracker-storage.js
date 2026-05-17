const trackerKeyPrefix = 'LMRWebTracker'
const trackerStorage = {
    setItem: function(key, type, value) {
        window.localStorage.setItem(`${trackerKeyPrefix}:${type}:${key.toLowerCase()}`, JSON.stringify(value));
        const event = new Event('trackedItemUpdated');
        event.trackedKey = key;
        event.trackedNewValue = value;
        document.dispatchEvent(event);
    },
    getItem: function(key, type) {
        return JSON.parse(window.localStorage.getItem(`${trackerKeyPrefix}:${type}:${key.toLowerCase()}`));
    },
    keyParts: function(prefixedKey) {
        const [prefix, type, key] = prefixedKey.split(':')
        return { prefix, type, key };
    },
    trackToggleItem: function(key, image) {
        const tracked = {
            type: 'toggle',
            value: false,
            image,
        };
        this.setItem(key, 'toggle', tracked);
    },
    getOrInitializeToggleItem(key, image) {
        const existing = this.getItem(key, 'toggle');
        if (!existing) { this.trackToggleItem(key, image); }
        return this.getItem(key, 'toggle');
    },
    toggle: function(key) {
        const tracked = this.getItem(key, 'toggle');
        tracked.value = !tracked.value;
        this.setItem(key, 'toggle', tracked);
        return tracked;
    },
    trackStepItem: function(key, steps) {
        const tracked = {
            type: 'step',
            value: 0,
            steps,
        };
        this.setItem(key, 'step', tracked);
    },
    getOrInitializeStepItem(key, steps) {
        const existing = this.getItem(key, 'step');
        if (!existing) { this.trackStepItem(key, steps); }
        return this.getItem(key, 'step');
    },
    stepUp: function(key) {
        const tracked = this.getItem(key, 'step');
        tracked.value = incrementCyclicCounter(tracked.value, tracked.steps.length);
        this.setItem(key, 'step', tracked);
        return tracked;
    },
    stepDown: function(key) {
        const tracked = this.getItem(key, 'step');
        tracked.value = decrementCyclicCounter(tracked.value, tracked.steps.length);
        this.setItem(key, 'step', tracked);
        return tracked;
    },
    trackCounter: function(key, image, maxVal, decrement) {
        const decrementing = decrement || false;
        const tracked = {
            type: 'counter',
            value: decrementing ? maxVal : 0,
            max: maxVal,
            decrement: decrementing,
            image,
        };
        this.setItem(key, 'counter', tracked);
    },
    getOrInitializeCounter(key, image, maxVal, decrement) {
        const existing = this.getItem(key, 'counter');
        if (!existing) { this.trackCounter(key, image, maxVal, decrement); }
        return this.getItem(key, 'counter');
    },
    increment: function(key) {
        const tracked = this.getItem(key, 'counter');
        tracked.value = incrementCyclicCounter(tracked.value, tracked.max);
        this.setItem(key, 'counter', tracked);
        return tracked;
    },
    decrement: function(key) {
        const tracked = this.getItem(key, 'counter');
        tracked.value = decrementCyclicCounter(tracked.value, tracked.max);
        this.setItem(key, 'counter', tracked);
        return tracked;
    },
    atMin: function(key) {
        const tracked = this.getItem(key, 'counter');
        return tracked.value === 0;
    },
    atMax: function(key) {
        const tracked = this.getItem(key, 'counter');
        return tracked.value === tracked.max;
    },
    complete: function(key, type) {
        const tracked = this.getItem(key, type);
        switch (type) {
            case "counter":
                return tracked.value === (tracked.decrement ? 0 : tracked.max);
            case "step":
                return tracked.value === tracked.steps;
            case "toggle":
                return value;
        }
    },
    getOrInitializePreference: function(key, defaultValue) {
        const existing = this.getItem(key, 'pref');
        if (!existing) { this.setItem(key, 'pref', defaultValue); }
    },
    setPreference: function(key, value) {
        this.setItem(key, 'pref', value);
    },
    getPreference: function(key, value) {
        return this.getItem(key, 'pref');
    },
    reset: function(key, type) {
        const tracked = this.getItem(key, type);
        if (tracked) {
            switch(type) {
                case 'toggle':
                    this.trackToggleItem(key, tracked.image);
                    break;
                case 'step':
                    this.trackStepItem(key, tracked.steps);
                    break;
                case 'counter':
                    this.trackCounter(key, tracked.image, tracked.max, tracked.decrement);
                    break;
            }
        }
    }
};

function incrementCyclicCounter(val, maxVal) {
    return val === maxVal ? 0 : val + 1;
}

function decrementCyclicCounter(val, maxVal) {
    return val === 0 ? maxVal : val - 1;
}
