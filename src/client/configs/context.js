import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { Random } from 'meteor/random';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check, Match } from 'meteor/check';

export default () => ({
  Accounts,
  check,
  Match,
  LocalState: new ReactiveDict(),
  Meteor,
  Random,
  Router: FlowRouter,
  SimpleSchema,
  Tracker,
  ValidatedMethod,
});
