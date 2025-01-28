// File: ReservationSystem.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Main functions for the application reservation system

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// An instance of the class SelectStepData that holds data for the step select step
var g_data_step_select = null; 

// An instance of the class OrganizationStepData that holds data for the organization step
var g_data_step_organization = null; 

// An instance of the class PremisesStepData that holds data for the premises step
var g_data_step_premises = null; 

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Main Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Initialisation
// 1. Init step select SelectStep.initStep
// 1.1 Create An instance of the class SelectStepData that holds data for the step select step
//     'id_div_select_display_step': Id for the container <div> for this step
//     'id_div_display_step': Id for the display step <div>
//     'id_div_select_step': Id for the <div> with the step dropdown control
//     'g_data_step_select': The name of the global object of this class (string)
// 1.2 Option: Customization of the object SelectStepData. 
//     Call of customizeSelectStepData
// 1.2 Init this step. Call of SelectStep.initStep
function initReservationSystem()
{
    g_data_step_select = new 
    SelectStepData('id_div_select_display_step', 'id_div_display_step', 'id_div_select_step', 'g_data_step_select');

    customizeSelectStepData(g_data_step_select);

    SelectStep.initStep(g_data_step_select);

    g_data_step_organization = new 
    OrganizationStepData('id_div_select_display_organization', 'id_div_display_organization', 'id_div_select_organization', 'g_data_step_organization');

    customizeOrganizationStepData(g_data_step_organization);

    OrganizationStep.initStep(g_data_step_organization);

    g_data_step_premises = new 
    PremisesStepData('id_div_select_display_premises', 'id_div_display_premises', 'id_div_select_premises', 'g_data_step_premises');

    customizePremisesStepData(g_data_step_premises);

    PremisesStep.initStep(g_data_step_premises);
               
} // initReservationSystem

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Main Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Customization Functions ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Customization of the object SelectStepData
function customizeSelectStepData(i_data_step_select)
{
    // Example
    // i_data_step_select.setPromptSelect("Something else than the default value");

} // customizeSelectStepData

// Customization of the object OrganizationStepData
function customizeOrganizationStepData(i_data_step_organization)
{
    // Example
    // i_data_step_organization.setPromptSelect("Something else than the default value");

} // customizeOrganizationStepData

// Customization of the object PremisesStepData
function customizePremisesStepData(i_data_step_premises)
{
    // Example
    // i_data_step_premises.setPromptSelect("Something else than the default value");

} // customizePremisesStepData


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Customization Functions /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
