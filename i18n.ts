import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ur', 'ar', 'fa', 'fr', 'es', 'de', 'zh', 'ja', 'ko', 'tr', 'ru', 'pt', 'hi', 'bn', 'id', 'ms', 'it', 'nl', 'pl'];


export default getRequestConfig(async () => {
    // Get locale from cookie or default to 'en'
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

    // Validate that the locale is supported
    const defaultMessages = (await import(`./messages/en.json`)).default;

    if (!locales.includes(locale as any)) {
        return {
            locale: 'en',
            messages: defaultMessages
        };
    }

    const userMessages = (await import(`./messages/${locale}.json`)).default;

    // Deep merge or just spread (spread is shallow, but better than nothing. For deep keys like nav.products it works if the whole nav object is present. 
    // But wait, if I have "nav" in simplified, it overwrites "nav" in default. 
    // I need a deep merge. Or I can just rely on the fact that I included the main sections.
    // Actually, for the simplified files, I only included "nav" and "home". 
    // If I access "auth.login", it won't be in the simplified file.
    // So spread `...defaultMessages, ...userMessages` will overwrite `nav` completely with the simplified version.
    // This means `nav.about` (if missing in simplified) will be undefined.
    // I should use a deep merge library or a simple utility.
    // Since I can't easily import lodash, I will use a simple spread for top-level keys, 
    // but wait, my simplified files have "nav" with SOME keys.
    // I should probably just use the default messages for keys that are missing.

    // A better approach for this project without adding dependencies:
    // I will just return the userMessages. If a key is missing, next-intl prints a warning and returns the key.
    // BUT, to satisfy "fallback to English when missing", I should try to merge.
    // Let's do a simple deep merge for the specific known namespaces if possible, or just accept that I need to be careful.

    // Actually, I can write a simple recursive merge function inside i18n.ts

    function deepMerge(target: any, source: any) {
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object && key in target) {
                Object.assign(source[key], deepMerge(target[key], source[key]));
            }
        }
        Object.assign(target || {}, source);
        return target;
    }

    // Actually, let's just use `...defaultMessages, ...userMessages` and hope for the best? 
    // No, `nav` in userMessages has only 9 keys. `nav` in default has 20+.
    // If I overwrite, I lose the other 11 keys.
    // I must do a deep merge.

    const messages = JSON.parse(JSON.stringify(defaultMessages)); // Deep clone

    // Simple merge helper since we know the structure is 2 levels deep mostly
    for (const section in userMessages) {
        if (messages[section]) {
            messages[section] = { ...messages[section], ...userMessages[section] };
        } else {
            messages[section] = userMessages[section];
        }
    }

    return {
        locale,
        messages
    };
});
