import { Category, Gender } from "./enums";

export interface NewUser {
	firstName: string;
	lastName: string;
	name: string;
	avatar: string;
	createdAt: string;
	email: string;
	gender: Gender,
	country: string,
	area: string;
	notificationCount: number;
	phoneNumber: number;
	categories: Array<Category>
}

export interface Product {
    ownerId: string;
    ownerEmail: string;
    ownerName: string;
    ownerAvatar: string;
    productName: string;
    productAspectRatio: string;
    category: string;
    thumbnail: string;
    prizeinRupees: number;
    addedDate: string;
}
