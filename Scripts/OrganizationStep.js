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

        i_organization_step_data.updateControls();


    } // initStep

    // Create the select process step dropdown
    static createDropdown(i_organization_step_data)
    {
        i_organization_step_data.createDropdown('OrganizationStep.eventSelectDropdown');

    } // createDropdown

    // User selected item of the process step dropdown
    static eventSelectDropdown(i_organization_step_data)
    {
        i_organization_step_data.updateControls();

    } // eventSelectDropdown

    // Updates the controls 
    static updateControls()
    {
        i_organization_step_data.updateControls();

    } // updateControls


} // OrganizationStep