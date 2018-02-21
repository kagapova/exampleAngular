import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-follow',
    templateUrl: './follow.component.html',
    styleUrls: ['./follow.component.scss']
})
export class FollowComponent {
    @Input() isFollowed: boolean;
    @Output() onFollowed = new EventEmitter<boolean>();
    isHover: boolean;

    onClick() {
        this.isFollowed = !this.isFollowed;
        this.onFollowed.emit(this.isFollowed);
        this.isHover = null;
    }

    onMouseEnter() {
        if (this.isFollowed && this.isHover !== null) {
            this.isHover = true;
        }
    }

    onMouseLeave() {
        if (this.isFollowed) {
            this.isHover = false;
        }
    }
}
