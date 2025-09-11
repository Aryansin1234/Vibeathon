export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const offset = 80; // Offset for fixed header if any
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
