export function truncateText(text, charLimit) {
    if (!text) {
        return '';
    }
    if (text.length <= charLimit) {
        return text;
    }
    return text.slice(0, charLimit) + '...';
}
