﻿import * as ts from "typescript";

export class ArrayUtils {
    private constructor() {
    }

    static isNullOrEmpty<T>(a: (T[] | undefined)): a is undefined {
        return !(a instanceof Array) || a.length === 0;
    }

    static getUniqueItems<T>(a: T[]) {
        return a.filter((item, index) => a.indexOf(item) === index);
    }

    static removeFirst<T>(a: T[], item: T) {
        const index = a.indexOf(item);
        if (index === -1)
            return false;
        a.splice(index, 1);
        return true;
    }

    static find<T>(items: T[] | IterableIterator<T>, condition: (item: T) => boolean) {
        for (const item of items) {
            if (condition(item))
                return item;
        }
        return undefined;
    }

    static from<T>(items: IterableIterator<T> | ts.Iterator<T>) {
        const a: T[] = [];
        for (const item of items)
            a.push(item);
        return a;
    }

    static *toIterator<T>(items: T[]) {
        for (const item of items) {
            yield item;
        }
    }

    static binarySearch<T>(items: T[], isEqual: (item: T) => boolean, isGreaterThan: (item: T) => boolean) {
        let top = items.length - 1;
        let bottom = 0;

        while (bottom <= top) {
            const mid = Math.floor((top + bottom) / 2);
            if (isEqual(items[mid]))
                return mid;

            if (isGreaterThan(items[mid]))
                top = mid - 1;
            else
                bottom = mid + 1;
        }

        return -1;
    }
}
