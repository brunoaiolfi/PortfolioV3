
import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInCopy = trigger('fadeInCopy', [
    state('out',
        style({ opacity: 0, transform: 'translateY(-20px)' })
    ),
    transition(':enter',
        [animate(300,            
            style({
                opacity: 1,
                transform: 'translateY(0px)'
            })),
        ]        
    ),
]);