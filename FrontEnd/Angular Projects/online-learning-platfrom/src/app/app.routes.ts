import { Routes } from '@angular/router';
import { ViewUser } from './user-service/view-user/view-user';
import { AddUser } from './user-service/add-user/add-user';
import { EditUser } from './user-service/edit-user/edit-user';
import { Menu } from './menu/menu';
import { ViewCourse } from './course-service/view-course/view-course';
import { AddCourse } from './course-service/add-course/add-course';
import { EditCourse } from './course-service/edit-course/edit-course';
import { ViewClassroom } from './classroom-service/view-classroom/view-classroom';
import { AddClassroom } from './classroom-service/add-classroom/add-classroom';
import { EditClassroom } from './classroom-service/edit-classroom/edit-classroom';
import { ViewAssessment } from './assessment-service/view-assessment/view-assessment';
import { AddAssessment } from './assessment-service/add-assessment/add-assessment';
import { EditAssessment } from './assessment-service/edit-assessment/edit-assessment';
import { ViewNotification } from './notification-service/view-notification/view-notification';
import { AddNotification } from './notification-service/add-notification/add-notification';
import { EditNotification } from './notification-service/edit-notification/edit-notification';

export const routes: Routes = [
    {path:'', component:Menu},
    {path:'user', component:ViewUser},
    {path:'add-user', component:AddUser},
    {path:'edit-user/:id',component:EditUser},

    //Course Routes
    {path:'course', component:ViewCourse},
    {path:'add-course', component:AddCourse},
    {path:'edit-course/:id',component:EditCourse},

    //Classroom Routes
    {path:'classroom', component:ViewClassroom},
    {path:'add-classroom', component:AddClassroom},
    {path:'edit-classroom/:id', component:EditClassroom},

    { path: 'assessments', component: ViewAssessment },
    { path: 'add-assessment', component: AddAssessment },
    { path: 'edit-assessment/:id', component: EditAssessment },

    { path: 'notifications', component: ViewNotification },
    { path: 'notifications/add', component: AddNotification },
    { path: 'notifications/edit/:id', component: EditNotification }
];