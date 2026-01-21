declare module 'lib'{
    export interface libOptions{
        option1:string;
        option2:number;
    }
    export function initialize(options:libOptions):void
    export const VERSION:string;
}

export class Widget{
    constructor(selector:string);
    show():void;
    hide():void;
}