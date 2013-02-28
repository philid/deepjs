/**
 * @author Gilles Coomans <gilles.coomans@gmail.com>
 */
if(typeof define !== 'function')
	var define = require('amdefine')(module);

/*
 * layer-compose : inspired by Compose, it offer a large set of tools that permit to manipulate values 
 * from within the object used as layer when applied together. 
 * As Compose merge two prototype by wrapping collided functions by appropriate Compose method (after, before, around),
 * layer-compose do the same by applying a function when values are collided with that function.
 *
 * If you know photoshop : it's an equivalent of the fusion modes between two layers (or part of two layers). 
 * TODO : implement almost every operations, few are done. Will be made on-need.

Remarque : 
Almost totaly unusable for now... ;)
But you could do it for us...;)

 */

define(function(require)
{
	var Collider = function(){

	}
	Collider.prototype = {}
	return {
		Collider:Collider,
		wrap:function(wrapper, wrapped){
			var a = function(value, parent, key){
				return wrapper(wrapped(value, parent, key), parent, key);
			}	
			a._deep_collider = true;
			return a;
		},
		retrieve:function(){
			return function(value, parent, name){
				return newObject;
			}
			a._deep_collider = true;
			return a;
		},
		copyTo:function(object, path){
			var a = function(value, parent, key){
				utils.setValueByPath(object, path, value)
				return value;
			}
			a._deep_collider = true;
			return a;	
		},
		around:function(handler){
			handler._deep_collider = true;
			return handler; 
		},
		replace:function(newValue){
			var a = function(value){
				return newValue;
			}
			a._deep_collider = true;
			return a;
		},
		log:function(){
			//console.log("add layer composition : log")
			var a =function(value){
				console.log("LayerTools : log : ",value);
				return value;
			}
			a._deep_collider = true;
			return  a;
		},
		validate:function(schema){
			return function(value){
				this._deep_collider = true;
				if(!validator.isValid(value, schema))
					throw new ValidationError(validator.report);
				return value;
			}
			a._deep_collider = true;
			return a;
		},
		remove:function(){
			var a = function(value, parent, key)
			{
				delete parent[key];
				return undefined;
			}
			a._deep_colliderRemove = true;
			return a;
		},
		assert:{
			isTrue:function(){
				return function(value){
					console.assert(value === true);
					return value;
				}
				a._deep_collider = true;
				return a;
			},
			isFalse:function(){
				var a = function(value){
					console.assert(value === false);
					return value;
				}
				a._deep_collider = true;
				return a;
			},
			equal:function(equalTo){
				return function(value){
					this._deep_collider = true;
					return value == equalTo;
				}
			},
			notEqual:function(notEqualTo){
				return function(value){
					this._deep_collider = true;
					return value != notEqualTo;
				}
			},
			isNumber:function(){
				return function(value){

				}
			},
			isBoolean:function(){
				return function(value){
					this._deep_collider = true;
					return Math.abs(value);
				}
			},
			isFloat:function(){
				return function(value){
					
				}
			},
			isInteger:function(){
				return function(value){
					
				}
			},
			isString:function(){
				return function(value){
					
				}
			},
			isFunction:function(){
				return function(value){
					
				}
			},
			isArray:function(){
				return function(value){
					
				}
			},
			isObject:function(){
				return function(value){
					
				}
			},
			isPresentInArray:function(array){

			},
			isRetrievable:function(){

			}
		},
		array:{

			median:function(by){
				return function(value){
					this._deep_collider = true;

				}
			},
			mean:function(by){
				return function(value){
					this._deep_collider = true;

				}
			},
			reverse:function(){
				return function(value){
					this._deep_collider = true;
					if(typeof value.push === 'function')
						return value.reverse();
					return value;
				}
			},
			sort:function(on){
				return function(value){
					this._deep_collider = true;

				}
			},
			filter:function(by){
				return function(value){
					this._deep_collider = true;

				}
			},
			merge:function(newArray, mergeOn){
				return function(value){
					this._deep_collider = true;
				}
			},
			remove:function(what){
				return function(value){
					this._deep_collider = true;
				}
			},
			push:function(newArray){
				return function(value){
					return newArray;
				}
			},
			unshift:function(newArray){
				return function(value){
					return newArray;
				}
			},
			pushTo:function(object, path){
				return function(value){
					this._deep_collider = true;
					utils.setValueByPath(object, path, value)
					return value;
				}
			},
			unshiftTo:function(object, path){
				return function(value){
					this._deep_collider = true;
					utils.setValueByPath(object, path, value)
					return value;
				}
			}
			// concat
		},
		string:{
			injectedAs:function(swig_string, name){

			},
			inject:function(what){},
			injectTo:function(path, object){
				return function(value){
					this._deep_collider = true;

				}
			},
			injectController:function(){
				return function (value, controller){
					this._deep_collider = true;

				}
			},
			injectValueAs:function(value, name){

			},
			replace:function(newObject){
				return function(){
				this._deep_collider = true;
					return newObject;
				}
			},
			reverse:function(by){
				return function(value){
					this._deep_collideréds = true;

				}
			},
			prepend:function(what){
				var a =  function(value, parent, key){
					return what+value+"";
				}
				a._deep_collider = true;
				return a;
			},
			append:function(what){
				var a =  function(value, parent, key){
					return value+what+"";
				}
				a._deep_collider = true;
				return a;
			},
			split:function(by){
				return function(value){
					this._deep_collider = true;

				}
			}
		},
		number:{
			increment:function(addition){
				return function(value){
					this._deep_collider = true;
					return value + 1;
				}
			},
			decrement:function(addition){
				return function(value){
					this._deep_collider = true;
					return value - 1;
				}
			},
			add:function(addition){
				return function(value){
					this._deep_collider = true;
					return value + addition;
				}
			},
			substract:function(val){
				return function(value){
					this._deep_collider = true;
					return value - val;
				}
			},
			substractedOf:function(val){
				return function(value){
					this._deep_collider = true;
					return val - value;
				}
			},
			abs:function(){
				return function(value){
					this._deep_collider = true;
					return Math.abs(value);
				}
			},
			multiply:function(by){
				return function(value){
					this._deep_collider = true;
					return by*value;
				}
			},
			divid:function(val){
				return function(value){
					this._deep_collider = true;
					return val/value;
				}
			},
			dividedBy:function(val){
				return function(value){
					this._deep_collider = true;
					return value/val;
				}
			},
			replace:function(newObject){
				return function(value){

					this.__leafControllerTools = true;
					return newObject;
				}
			},
			max:function(val){
				return function(value){
					this._deep_collider = true;
					return Math.max(value, val);
				}
			},
			min:function(val){
				return function(value){
					this._deep_collider = true;
					return Math.min(value, min);
				}
			}
		},
		object:{
			merge:function merge(newObject, overwrite, schema){
				var a = function(oldObject){
					return deepCopy(newObject, oldObject, overwrite, schema);
				}
				a._deep_collider = true;
				return  a;
			},
			replace:function(newObject){
				var a = function(){
					return newObject;
				}
				a._deep_collider = true;
				return  a;
			},
			swapProperty:function(prop1,prop2){

			},
			insertPropertyBefore:function(propertyToFind, propertyToInsert){

			},
			insertAfter:function(propertyToFind, propertyToInsert){},
			prepend:function(propertyToInsert){

			},
			appendProperty:function(propertyName, propertyValue){
				var a = function(value, parent, key)
				{
					value[propertyName] = propertyValue;
					return value;
				}
				a._deep_collider = true;
				return a;
			}
		},
		"boolean":{
			and:function(val){},
			or:function(val){}
		},
		"func":{
			apply:function(othis, args){
				return function(value){
					args = args || null;
					this._deep_collider = true;
					return value.apply(othis, args);
				}
			}
		}
	}
	
});