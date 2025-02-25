// File: OrganizationStep.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// Content
// =======
//
// Class with static functions for the organization process step
//
// The corresponding data class OrganizationStepData holds data for the step
// With this division in two classes it is possible to define event functions
// in the static class


class OrganizationStep
{
    // Initialization of the step
    static initStep(i_organization_step_data)
    {

        OrganizationStep.createDropdown(i_organization_step_data);

        OrganizationStep.createTextbox(i_organization_step_data);

        i_organization_step_data.updateControls();


    } // initStep

    // Create the select organization dropdown
    static createDropdown(i_organization_step_data)
    {
        i_organization_step_data.createDropdown('OrganizationStep.eventSelectDropdown');

    } // createDropdown

    // Create the display organization textbox
    static createTextbox(i_organization_step_data)
    {
        i_organization_step_data.createTextbox();

    } // createTextbox

    // User selected item of the process step dropdown
    static eventSelectDropdown(i_organization_step_data)
    {
        i_organization_step_data.updateControls();

    } // eventSelectDropdown

    // Updates the controls 
    static updateControls(i_organization_step_data)
    {
        i_organization_step_data.updateControls();

    } // updateControls

    // Hides the container <div> with the divs display and select
    static hideDivDisplaySelect(i_organization_step_data)
    {
        i_organization_step_data.hideDivDisplaySelect();

    } // hideDivDisplaySelect

    // Displays the container <div> with the divs display and select
    static displayDivDisplaySelect(i_organization_step_data)
    {
        i_organization_step_data.displayDivDisplaySelect();

    } // displayDivDisplaySelect


} // OrganizationStep