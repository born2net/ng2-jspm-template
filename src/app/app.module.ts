import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";

import assign from "lodash/assign";

import {App} from "./app.component";
import {APP_ROUTES, appRoutingProviders} from "./app.routes";
import {createStoreProvider} from "./app.store";
import {InputTestModule} from "./inputTest/inputTest.module";
import {TodosModule} from "./todos/todos.module";

let initialState = {};

const IMPORTS = [
  HttpModule,
  APP_ROUTES,
  InputTestModule,
  TodosModule,
  createStoreProvider(initialState)
];

@NgModule({
  imports: IMPORTS,
  providers: [appRoutingProviders],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
  static extendInitialState(state: any) {
    assign(initialState, state);
  }
}