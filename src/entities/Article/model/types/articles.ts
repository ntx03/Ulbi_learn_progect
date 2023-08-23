import {type User} from "@/entities/User";
import type {ArticleBlockType, ArticleType} from "../consts/consts";

export interface ArticleBlockBase {
   id: string,
   type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    "id": string;
    "title": string;
    "subtitle": string;
    "user": User;
    "img": string;
    "views": number | string;
    "createdAt": string;
    "type": ArticleType[];
    "block": ArticleBlock[];
}