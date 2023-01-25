import { PATHS } from "./paths";
import {
  CandidatesPage,
  DashboardPage,
  EmployeesPage,
  ErrorPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  ReportsPage,
} from "../pages/";

export const authRoutes = [
  {
    key: PATHS.dashboard,
    path: PATHS.dashboard,
    Element: DashboardPage,
  },
  {
    key: PATHS.employees,
    path: PATHS.employees,
    Element: EmployeesPage,
  },
  {
    key: PATHS.candidates,
    path: PATHS.candidates,
    Element: CandidatesPage,
  },
  {
    key: PATHS.reports,
    path: PATHS.reports,
    Element: ReportsPage,
  },
  {
    key: PATHS.error,
    path: PATHS.error,
    Element: ErrorPage,
  },
];

export const routes = [
  {
    key: PATHS.root,
    path: PATHS.root,
    Element: LandingPage,
  },
  {
    key: PATHS.login,
    path: PATHS.login,
    Element: LoginPage,
  },
  {
    key: PATHS.register,
    path: PATHS.register,
    Element: RegisterPage,
  },
  
];
