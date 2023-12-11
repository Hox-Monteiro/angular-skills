import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../core/interfaces/cards";
import { SkillService } from "../../core/services/skill.service";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
    @Input() card: Card;

    constructor(public skillService: SkillService) { }

    ngOnInit() { }

    onLike(skill: Card) {
        skill.likes++;
        this.skillService.editSkill(skill).subscribe((res) => {
            console.log('Sucesso');
        })
    }

    onShare() {
        window.open('https://www.linkedin.com/in/hox-monteiro/', '_blank');
                
    }
}
