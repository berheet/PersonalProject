import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import Profile from "./components/Profile/Profile";
import FoodLog from "./components/FoodLog/FoodLog";
import Exercises from "./components/Exercises/Exercises";
import App from "./App";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/ContactUs";
import MacroCalculator from "./components/MacroCalculator/MacroCalculator";
import newMacroC from "./components/MacroCalculator/newMacroC";
import LostWeight from "./components/MacroCalculator/DesiredGoals/lostWeight";
import GainWeight from "./components/MacroCalculator/DesiredGoals/gainWeight";
import Nutrition from "./components/Nutrition/Nutrition";
import Recipies from "./components/Nutrition/subHeaders/Recipies";
import Top50 from "./components/Nutrition/subHeaders/Top50";
import Articles from "./components/Nutrition/subHeaders/Articles";
import Upperbody from "./components/Exercises/SubFolder/Upperbody";
import Lowerbody from "./components/Exercises/SubFolder/Lowerbody";
import Abs from "./components/Exercises/SubFolder/Abs";
import FirstArticle from "./components/Nutrition/subHeaders/Articles/FirstArticle";
import SecondArticle from "./components/Nutrition/subHeaders/Articles/SecondArticle";
import ThirdArticle from "./components/Nutrition/subHeaders/Articles/ThirdArticle";
import FourthArticle from "./components/Nutrition/subHeaders/Articles/FourthArticle";
import FifthArticle from "./components/Nutrition/subHeaders/Articles/FifthArticle";
import SixthArticle from "./components/Nutrition/subHeaders/Articles/SixthArticle";
import SeventhArticle from "./components/Nutrition/subHeaders/Articles/SeventhArticle";
import EightArticle from "./components/Nutrition/subHeaders/Articles/EightArticle";
import NinthArticle from "./components/Nutrition/subHeaders/Articles/NinthArticle";
import TenthArticle from "./components/Nutrition/subHeaders/Articles/TenthArticle";
import Breakfast from "./components/Nutrition/subHeaders/RecipiesFood/Breakfast";
import Lunch from "./components/Nutrition/subHeaders/RecipiesFood/Lunch";
import Dinner from "./components/Nutrition/subHeaders/RecipiesFood/Dinner";
import Snacks from "./components/Nutrition/subHeaders/RecipiesFood/Snacks";
import Shop from "./components/Shop/Shop";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dashboard/FoodLog" component={FoodLog} />
    <Route path="/dashboard/profileSettings" component={ProfileSettings} />
    <Route path="/profile" component={Profile} />
    <Route path="/login" component={Login} />
    <Route path="/Exercises" component={Exercises} />
    <Route path="/Shop" component={Shop} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/dashboard/MacroCalculator" component={newMacroC} />
    <Route path="/dashboard/MacroCalulator/lostweight" component={LostWeight} />
    <Route path="/dashboard/MacroCalulator/gainweight" component={GainWeight} />
    <Route path="/Nutrition" component={Nutrition} />
    <Route path="/Recipies" component={Recipies} />
    <Route path="/Top50" component={Top50} />
    <Route path="/Articles" component={Articles} />
    <Route path="/UpperBody" component={Upperbody} />
    <Route path="/Lowerbody" component={Lowerbody} />
    <Route path="/Abs" component={Abs} />
    <Route path="/FlexibleDieting" component={FirstArticle} />
    <Route path="/11WaysToBurnMoreFat" component={SecondArticle} />
    <Route path="/3WaysToBounceBack" component={ThirdArticle} />
    <Route
      path="/WhyYouShouldBeIntermittentFasting"
      component={FourthArticle}
    />
    <Route path="/FoodsToBoostYourEnergy" component={FifthArticle} />
    <Route path="/WhereToStartMealPrep" component={SixthArticle} />
    <Route path="/GuideToVitaminC" component={SeventhArticle} />
    <Route path="/MythsAboutProtein" component={EightArticle} />
    <Route path="/NutritionalPlan" component={NinthArticle} />
    <Route path="/SixPackNutrition" component={TenthArticle} />
    <Route path="/BreakfastRecipies" component={Breakfast} />
    <Route path="/LunchRecipies" component={Lunch} />
    <Route path="/DinnerRecipies" component={Dinner} />
    <Route path="/SnacksRecipies" component={Snacks} />
    <Route path="/Shop" component={Shop} />
  </Switch>
);
