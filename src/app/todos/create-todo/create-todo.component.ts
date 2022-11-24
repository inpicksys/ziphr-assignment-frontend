import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Todo } from 'src/app/shared/interfaces/todo';


@Component({
    selector: 'create-todo',
    templateUrl: './create-todo.component.html',
    styleUrls: ['./create-todo.component.scss'],
  })
  export class CreateTodo implements OnInit, OnDestroy {
    genders = ['male', 'female'];
    todoForm!: FormGroup;
    currentTodo!: Todo;
    model!: NgbDateStruct;
    date!: { year: number, month: number };
    
    constructor(private appService: AppService,
                private route: ActivatedRoute,
                private router: Router,
                private calender: NgbCalendar,
                private formBuilder: FormBuilder) 
                {}
  
    ngOnInit() {
        this.todoForm  = this.formBuilder.group({
            startDate: [null, Validators.required],
            startTime: [null, Validators.required],
          })
    //   this.todoForm = new FormGroup({
    //     // userData: new FormGroup({
    //     //   username: new FormControl(null, [
    //     //     Validators.required,
    //     //     //this.forbiddenNames.bind(this),
    //     //   ]),
    //     // //   email: new FormControl(
    //     // //     null,
    //     // //     [Validators.required, Validators.email],
    //     // //     this.forbiddenEmails
    //     // //   ),
    //     // }),
    //     // gender: new FormControl('male'),
      
    //   });
    //   this.todoForm.addControl("test", new FormControl({day: 20, month:4, year:1969})) //nice
      // this.signupForm.valueChanges.subscribe(
      //   (value) => console.log(value)
      // );
    //   this.signupForm.statusChanges.subscribe((status) => console.log(status));
    //   this.signupForm.setValue({
    //     userData: {
    //       username: 'Max',
    //       email: 'max@test.com',
    //     },
    //     gender: 'male',
    //     hobbies: [],
    //   });
    //   this.signupForm.patchValue({
    //     userData: {
    //       username: 'Anna',
    //     },
    //   });
    }
    ngOnDestroy(): void {}
    onSubmit() {
        this.appService.addTodo(this.todoForm.value);
    }
    onCancel() {
       this.router.navigate(['../'], {relativeTo: this.route});
    }
  
   
}
  