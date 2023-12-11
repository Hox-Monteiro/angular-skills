import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    name = "Angular";

    public loading: boolean = true;

    loadingReturn($event) {
        this.loading = !this.loading;
    }
}
