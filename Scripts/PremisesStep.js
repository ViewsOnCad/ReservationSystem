// File: PremisesStep.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// Content
// =======
//
// Class with static functions for the premises process step
//
// The corresponding data class PremisesStepData holds data for the step
// With this division in two classes it is possible to define event functions
// in the static class


class PremisesStep
{
    // Initialization of the step
    static initStep(i_premises_step_data)
    {
        PremisesStep.createDropdown(i_premises_step_data);

        PremisesStep.createTextbox(i_premises_step_data);

        i_premises_step_data.updateControls();

    } // initStep

    // Create the select premises dropdown
    static createDropdown(i_premises_step_data)
    {
        i_premises_step_data.createDropdown('PremisesStep.eventSelectDropdown');

    } // createDropdown

    // Create the display premises textbox
    static createTextbox(i_premises_step_data)
    {
        i_premises_step_data.createTextbox();

    } // createTextbox

    // User selected item of the premises dropdown
    static eventSelectDropdown(i_premises_step_data)
    {
        i_premises_step_data.updateControls();

    } // eventSelectDropdown

    // Updates the controls 
    static updateControls(i_premises_step_data)
    {
        i_premises_step_data.updateControls();

    } // updateControls

    // Hides the container <div> with the divs display and select
    static hideDivDisplaySelect(i_premises_step_data)
    {
        i_premises_step_data.hideDivDisplaySelect();

    } // hideDivDisplaySelect

    // Displays the container <div> with the divs display and select
    static displayDivDisplaySelect(i_premises_step_data)
    {
        i_premises_step_data.displayDivDisplaySelect();

    } // displayDivDisplaySelect

} // PremisesStep