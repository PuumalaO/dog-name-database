import DogNamesList from "./DogNamesList";
import { withTracker } from 'meteor/react-meteor-data';
import { DogNames } from '../api/dognames.js';


const DogNamesListContainer = withTracker(({searchTerm})=>{
    
    Meteor.subscribe('dogNames');
    var searchTermProp = searchTerm.toUpperCase()
    if(searchTerm === "" || searchTerm === undefined){
        var query = DogNames.find({},{sort:{name: 1}}).fetch()
    }
    else{
        var query = DogNames.find({name:{$regex: searchTermProp}}).fetch()
    }
    return{
        dogNames: query
    }
})(DogNamesList)
 
export default DogNamesListContainer;