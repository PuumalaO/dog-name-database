import {Meteor} from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {check} from 'meteor/check';

export const DogNames = new Mongo.Collection('dogNames');

if(Meteor.isServer){
    Meteor.publish('dogNames', ()=>{
        return DogNames.find({},{sort:{name: 1}})
    })
}

Meteor.methods({
    'dognames.insert'(name){
        check(name, String);
        const nameToSend = name.toUpperCase().trim()
        var exists = DogNames.find({name: nameToSend}).fetch()
        if(nameToSend === ""){
            throw new Meteor.Error("no-name-given", "No name was given")
        }
        else if(Object.keys(exists).length === 0){
            DogNames.insert({
                name: nameToSend
            });
        }
        else{
            throw new Meteor.Error("name-already-exists", "Name already exists in database")
        }
        
    }
})

