
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
