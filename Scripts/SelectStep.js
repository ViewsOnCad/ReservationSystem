// File: SelectStep.js
// Date: 2025-01-22
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Class with functions and data for the select creation process step


class SelectStep
{

    constructor(i_id_div_select_display_step, i_id_div_display_container, i_id_div_select_container)
    {
        // The identity of the container <div> for the select creation process step
        this.m_id_div_select_display_step = i_id_div_select_display_step;

        // The identity of the <div> that diplays the process step
        this.m_id_div_display_container = i_id_div_display_container;

        // The identity of the container <div> for the select step dropdown control 
        this.m_id_div_select_container = i_id_div_select_container;

        // Array of strings defining the steps of the creation process
        this.m_step_array = [];

        this.default();

        // Sets the creation step array m_step_array
        this.setStepArray();

    } // constructor

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Default Values //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


    // Sets the default values for the member variables
    default()
    {

    } // default

    ///////////////////////////////////////////////////////////////////////////
    /////// End Default Values ////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Sets the creation step array m_step_array
    setStepArray()
    {


    } // setStepArray

} // SelectStep