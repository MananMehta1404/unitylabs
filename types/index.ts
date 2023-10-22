import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface AuthorProps {
    matchLevel: string,
    matchedWords: [string],
    value: string
}

export interface TitleProps {
    fullyHighlighted: boolean,
    matchLevel: string,
    matchedWords: [string],
    value: string
}

export interface URLProps {
    fullyHighlighted: boolean,
    matchLevel: string,
    matchedWords: [string],
    value: string
}

export interface CommentProps {
    author: string,
    children: CommentProps[],
    created_at: string,
    created_at_i: number,
    id: number,
    options: [],
    parent_id: number,
    points: number,
    story_id: number,
    text: string,
    title: string,
    type: string,
    url: string
}

export interface PostProps {
    _highlightResult: {
        author: AuthorProps,
        title: TitleProps,
        url: URLProps
    }
    _tags: string[],
    author: string,
    children: CommentProps[],
    created_at: string,
    created_at_i: number,
    num_comments: number,
    objectID: string,
    points: number,
    story_id: number,
    title: string,
    updated_at: string,
    url: string,
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}
