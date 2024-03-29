export default class Theme {
    constructor() {
        this.themes = [
            // dark
            {
                background: 'var(--dark1)',
                container: 'var(--dark2)',
                hover: 'var(--white3)',
                text: 'var(--white1)',

            },
            // light
            {
                background: 'var(--white1)',
                container: 'var(--white2)',
                hover: 'var(--white4)',
                text: 'var(--dark1)',
            },
        ];

        // localStorage - remember color scheme list index selected by user (default dark)
        this.selectedThemeIndex = localStorage.selectedThemeIndex ??= 0;

        this.setColorScheme(this.selectedThemeIndex);
    }

    setColorScheme(themeIndex) {
        localStorage.selectedThemeIndex = themeIndex;
    }
}