
    export interface Child2 {
        type: string;
        child_title?: string;
        child_subtitle?: string;
    }

    export interface Child {
        type: string;
        child?: Field;
    }

    export interface Field {
        type: string;
        height?: string;
        width?: string;
        child?: Child;
        kind?: string;
        image?: string;
        data?: string;
        style_fontSize?: string;
        style_color?: string;
        style_fontWeight?: string;
        align?: string;
        elevation?: string;
        color?: string;
        title?: string;
        backgroundColor?: string;
        iconThemeColor?: string;
        centerTitle?: string;
        decoration_labelText?: string;
        obscureText?: string;
        decoration_prefixIcon?: string;
        valid_length?: string;
        child_text?: string;
        path?: string;
        child_title?: string;
        child_subtitle?: string;
    }

    export interface RootObject {
        fields: Field[];
    }
