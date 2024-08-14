import { Routes } from '@angular/router';
import {DashboardComponent} from "./shared/components/dashboard/dashboard.component";
import {LandingPageComponent} from "./layout/landing-page/landing-page.component";
import {LoginComponent} from "./features/authentication/login/login.component";
import {RegisterComponent} from "./features/authentication/register/register.component";
import {CreateEquipmentComponent} from "./features/equipment-management/create-equipment/create-equipment.component";
import {DEquipmentComponent} from "./shared/components/dashboard/d-equipment/d-equipment.component";
import {CreateDefectComponent} from "./features/defect-management/create-defect/create-defect.component";
import {roleGuard} from "./core/guards/role.guard";
import {authGuard} from "./core/guards/auth.guard";
import {DHomeComponent} from "./shared/components/dashboard/d-home/d-home.component";
import {DDefectComponent} from "./shared/components/dashboard/d-defect/d-defect.component";
import {DUserComponent} from "./shared/components/dashboard/d-user/d-user.component";
import {
  AssignedTicketComponent
} from "./shared/components/dashboard/d-views/ticket-section/assigned-ticket/assigned-ticket.component";
import {
  ClosedTicketComponent
} from "./shared/components/dashboard/d-views/ticket-section/closed-ticket/closed-ticket.component";
import {
  InProgressTicketComponent
} from "./shared/components/dashboard/d-views/ticket-section/in-progress-ticket/in-progress-ticket.component";
import {
  OpenTicketComponent
} from "./shared/components/dashboard/d-views/ticket-section/open-ticket/open-ticket.component";
import {
  ResolvedTicketComponent
} from "./shared/components/dashboard/d-views/ticket-section/resolved-ticket/resolved-ticket.component";
import {ViewPanelComponent} from "./shared/components/dashboard/d-views/view-panel/view-panel.component";
import {DashboardTechComponent} from "./shared/components/dashboard-tech/dashboard-tech.component";
import {DashboardUserComponent} from "./shared/components/dashboard-user/dashboard-user.component";
import {DViewsComponent} from "./shared/components/dashboard/d-views/d-views.component";
import {
  CreateSupportTicketComponent
} from "./features/support-ticket-management/create-support-ticket/create-support-ticket.component";
import {DUEquipmentComponent} from "./shared/components/dashboard-user/d-u-equipment/d-u-equipment.component";
import {DUTicketComponent} from "./shared/components/dashboard-user/d-u-ticket/d-u-ticket.component";
import {DTTicketComponent} from "./shared/components/dashboard-tech/d-t-ticket/d-t-ticket.component";

let AdminComponent;
export const routes: Routes = [

  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  { path: 'landingPage', component: LandingPageComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard, roleGuard(['ADMIN'])]
  },
  { path: 'add-defect',
    component: CreateDefectComponent,
    canActivate: [authGuard, roleGuard(['ADMIN'])]
  },
  { path: 'add-equipment',
    component: CreateEquipmentComponent,
    canActivate: [authGuard, roleGuard(['ADMIN'])]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [authGuard , roleGuard(['ADMIN'])],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DHomeComponent,
        canActivate: [authGuard, roleGuard(['ADMIN'])]
      },
      {
        path: 'defects',
        component: DDefectComponent,
        canActivate: [authGuard, roleGuard(['ADMIN'])]
      },
      {
        path: 'equipments',
        component: DEquipmentComponent,
        canActivate: [authGuard, roleGuard(['ADMIN'])]
      },
      {
        path: 'users',
        component: DUserComponent,
        canActivate: [authGuard, roleGuard(['ADMIN'])]
      },
      {
        path: 'views',
        component: DViewsComponent,
        canActivate: [authGuard, roleGuard(['ADMIN'])],
        children: [
          {
            path: '',
            redirectTo: 'tickets/open',
            pathMatch: 'full'
          },
          {
            path: 'tickets/assigned',
            component: AssignedTicketComponent,
            canActivate: [authGuard, roleGuard(['ADMIN'])]
          },
          {
            path: 'tickets/closed',
            component: ClosedTicketComponent,
            canActivate: [authGuard, roleGuard(['ADMIN'])]
          },
          {
            path: 'tickets/in-progress',
            component: InProgressTicketComponent,
            canActivate: [authGuard, roleGuard(['ADMIN'])]
          },
          {
            path: 'tickets/open',
            component: OpenTicketComponent,
            canActivate: [authGuard, roleGuard(['ADMIN'])]
          },
          {
            path: 'tickets/resolved',
            component: ResolvedTicketComponent,
            canActivate: [authGuard, roleGuard(['ADMIN'])]
          }
        ]
      }
    ]
  },


  { path: 'add-ticket',
    component: CreateSupportTicketComponent,
    canActivate: [authGuard, roleGuard(['USER'])]
  },
  {
    path: 'user/dashboard-user',
    component: DashboardUserComponent,
    canActivate: [authGuard, roleGuard(['USER'])],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DashboardUserComponent,
        canActivate: [authGuard, roleGuard(['USER'])]
      },
      {
        path: 'equipments',
        component: DUEquipmentComponent,
        canActivate: [authGuard, roleGuard(['USER'])]
      },
      {
        path: 'views',
        component: DUTicketComponent,
        canActivate: [authGuard, roleGuard(['USER'])],
      }
    ]
  },


  {
    path: 'tech/dashboard-tech',
    component: DashboardTechComponent,
    canActivate: [authGuard, roleGuard(['TECH'])],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DashboardTechComponent,
        canActivate: [authGuard, roleGuard(['TECH'])]
      },
      {
        path: 'equipments',
        component: DEquipmentComponent,
        canActivate: [authGuard, roleGuard(['TECH'])]
      },
      {
        path: 'views',
        component: DTTicketComponent,
        canActivate: [authGuard, roleGuard(['TECH'])],
      }
    ]
  },

];
