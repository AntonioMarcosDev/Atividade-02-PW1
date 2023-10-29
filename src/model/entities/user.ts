import type technologies from './technology';

export default interface user {
    id: string;
    name: string;
    username: string;
    technologies: technologies[];
}
