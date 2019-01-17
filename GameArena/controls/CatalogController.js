var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var User = require("./../models/User.js");

module.exports = function(req, res, next)
{
  if(req.method === 'POST')
  {

    var buttonPressed = req.body;

    if (buttonPressed.postinfo)
    {
        var UserReq = req.body;

        if ((Object.keys(UserReq).length != 0))
       {
            var use = new User
            ({
                firstName: UserReq.firstName,
                lastName: UserReq.lastName,
                email: UserReq.email,
                Address: UserReq.Address,
                City:UserReq.City,
                State: UserReq.State,
                Country: UserReq.Country,
                Pincode: UserReq.Pincode
            });

      //method to update if exists else create new object
            User.findOneAndUpdate
            ({
                firstName: UserReq.firstName,
                lastName: UserReq.lastName
             },
             {
               firstName: UserReq.firstName,
               lastName: UserReq.lastName,
               email: UserReq.email,
               Address: UserReq.Address,
               City:UserReq.City,
               State: UserReq.State,
               Country: UserReq.Country,
               Pincode: UserReq.Pincode
             },
             {
                upsert: true
             }, function(err, doc)
             {
                if (err) return res.send(500,{error: err});
                res.render('Register',{User: use});
             });

          }
          else
         {
            var path = process.cwd();
            res.render('index');
         }

        }
        else if (buttonPressed.displaytable)
        {

            User.find(function(err, Users)
           {
            if (err) return console.error(err);
            res.render('data',{ Users });
           });

       }
       else if (buttonPressed.search)
       {
        User.find
       ({
           firstName: req.body.searchString;
        }, function(err, Users)
           {
            if (err)
            {
                var path = process.cwd();
                res.render('index');
            }
            res.render('data', {Users});
          });
        }
    }
  };
