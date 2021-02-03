function editElement(refElement, match, replacer) {
    const matcher = RegExp(match, 'g');
    const result = refElement.textContent.replace(matcher, replacer);
    refElement.textContent = result;
}