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

        g_hide_display_steps.exec(i_select_step_data.getSelectedOptionNumber());

    } // eventSelectDropdown

    // Updates the controls of the form
    static updateControls()
    {
        i_select_step_data.updateControls();

    } // updateControls


} // SelectStep

class HideDisplaySteps
{
    constructor(i_select_step_data, i_organization_step_data, i_premises_step_data, i_layout_step_data, i_export_step_data, i_update_step_data)
    {

        this.m_select_step_data = i_select_step_data;

        this.m_organization_step_data = i_organization_step_data;

        this.m_premises_step_data = i_premises_step_data;

        this.m_layout_step_data = i_layout_step_data;

        this.m_export_step_data = i_export_step_data;

        this.m_update_step_data = i_update_step_data;
    }

    exec(i_step_number)
    {
        if (1 == i_step_number)
        {
            this.execSelectStep()
        }
        else if (2 == i_step_number)
        {
            this.execOrganizationStep()
        }
        else if (3 == i_step_number)
        {
            this.execPremisesStep()
        }
        else if (4 == i_step_number)
        {
            this.execLayoutStep()
        }
        else if (5 == i_step_number)
        {
            this.execExportStep()
        }
        else if (6 == i_step_number)
        {
            this.execUpdateStep()
        }
        else
        {
            alert("HideDisplaySteps.exec Error i_step_number= " + i_step_number.toString());
        }

    } // exec

    execSelectStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }

    } // execSelectStep

    execOrganizationStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.displayDivDisplaySelect();

            this.m_organization_step_data.displayDivSelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.displayDivDisplaySelect();

            this.m_premises_step_data.hideDivSelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }

    } // execOrganizationStep    

    execPremisesStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.displayDivDisplaySelect();

            this.m_organization_step_data.hideDivSelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.displayDivDisplaySelect();

            this.m_premises_step_data.displayDivSelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }
    } // execPremisesStep    

    execLayoutStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.displayDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }
    } // execLayoutStep    

    execExportStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }
    } // execExportStep  

    execUpdateStep()
    {
        if (this.m_select_step_data != null)
        {

        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_select_step_data is null ");
        }

        if (this.m_organization_step_data != null)
        {
            this.m_organization_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_premises_step_data != null)
        {
            this.m_premises_step_data.hideDivDisplaySelect();
        }
        else
        {
            alert("HideDisplaySteps.execSelectStep m_organization_step_data is null ");
        }

        if (this.m_layout_step_data != null)
        {
            this.m_layout_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_layout_step_data is null ");
        }

        if (this.m_export_step_data != null)
        {
            this.m_export_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_export_step_data is null ");
        }

        if (this.m_update_step_data != null)
        {
            this.m_update_step_data.hideDivDisplaySelect();
        }
        else
        {
            //Temporary alert("HideDisplaySteps.execSelectStep m_update_step_data is null ");
        }
    } // execUpdateStep  

} // HideDisplaySteps