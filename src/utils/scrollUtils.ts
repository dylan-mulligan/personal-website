/**
 * Smoothly scrolls to an element by its ID, accounting for a fixed navbar height.
 * @param id - The ID of the element to scroll to.
 */
export const scrollToElementById = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
        const navbarHeight = 80; // Adjust this value based on your navbar height
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
};

/**
 * Smoothly scrolls to an element by its ID, accounting for a fixed navbar height.
 * @param id - The ID of the element to scroll to.
 * @param offset - Optional offset in pixels (e.g., navbar height)
 * @param behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToElementByIdWithOffset = (
    id: string,
    offset: number = 80,
    behavior: ScrollBehavior = 'smooth'
): void => {
    const element = document.getElementById(id);
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: offsetTop, behavior });
    }
};
