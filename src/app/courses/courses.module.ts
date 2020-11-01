import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../shared/components/star/star.module';
import { AppPipeModule } from './../shared/pipe/pipe.module';


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
            {
                path: 'courses', component: CourseListComponent
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CoursesModule { }