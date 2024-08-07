import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { detectTempo } from "src/store/actions";

@Component({
    selector: "app-tap-button",
    templateUrl: "./tap-button.component.html",
    styleUrls: ["./tap-button.component.scss"],
})
export class TapButtonComponent {
    constructor(private store: Store) {}

    updateTempo() {
        this.store.dispatch(detectTempo({}));
    }
}
