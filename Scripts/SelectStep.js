// File: SelectStep.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// Content
// =======
//
// Class with static functions for the select process step
//
// The corresponding data class SelectStepData holds data for the step
// With this division in two classes it is possible to define event functions
// in the static class


class SelectStep
{
    // Initialization of the step
    static initStep(i_select_step_data)
    {

        SelectStep.createDropdown(i_select_step_data);

        i_select_step_data.updateControls();


    } // initStep

    // Create the select process step dropdown
    static createDropdown(i_select_step_data)
    {
        i_select_step_data.createDropdown('SelectStep.eventSelectDropdown');

    } // createDropdown

    // User selected item of the process step dropdown
    static eventSelectDropdown(i_select_step_data)
    {
        i_select_step_data.updateControls();

    } // eventSelectDropdown

    // Updates the controls of the form
    static updateControls()
    {
        i_select_step_data.updateControls();

    } // updateControls


} // SelectStep