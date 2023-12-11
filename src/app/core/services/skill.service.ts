//interface
import { Card } from "src/app/core/interfaces/cards";


// packages
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})

export class SkillService {
    private skillUrl = "api/skills/";
    constructor(private http: HttpClient) { }

    getSkills(): Observable<Card[]> {
        return this.http.get<Card[]>(this.skillUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    createSkill(skill: Card): Observable<Card> {
        skill.id = null;
        return this.http.post<Card>(this.skillUrl, skill).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        );
    }

    editSkill(skill: Card): Observable<any> {
        return this.http.put(this.skillUrl + skill.id, skill);
    }

    deleteSkill(id: number): Observable<any> {
        return this.http.delete(this.skillUrl + id);
    }
}
