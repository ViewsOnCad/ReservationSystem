// File: SelectStepData.js
// Date: 2025-01-27
// Author: Gunnar Lidén

// Content
// =======
//
// Class that holds data for the select process step
//
// The corresponding class SelectStep has static functions for the proicess step
// With this division in two classes it is possible to define event functions
// in the static class

class SelectStepData
{
    constructor(i_id_div_select_display_step, i_id_div_display_container, i_id_div_select_container, i_global_variable_str)
    {
        // The identity of the container <div> for the select creation process step
        this.m_id_div_select_display_step = i_id_div_select_display_step;

        // The identity of the <div> that diplays the process step
        this.m_id_div_display_container = i_id_div_display_container;

        // The identity of the container <div> for the select step dropdown control 
        this.m_id_div_select_container = i_id_div_select_container;

        // The name of the global variable for the instance of this class
        this.m_global_variable_str = i_global_variable_str;

        // Array of strings defining the steps of the creation process
        this.m_step_array = null;

        // Prompt string select process step
        this.m_step_prompt_select = '';

        // Process step organization
        this.m_step_organization = '';

        // Process step premises/version
        this.m_step_premises_versions = '';

        // Process step premises layout
        this.m_step_premises_layout = '';

        // Process step create and export files
        this.m_step_create_export_files = '';

    	// Process step files for an updated event program
        this.m_step_update_event_program = '';

        // Select process step dropdown
        this.m_dropdown = null;

        this.default();

    } // constructor

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Default Texts ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


    // Sets the default values for the text member variables
    default()
    {
        this.m_step_prompt_select = this.defaultPromptSelect();

        this.m_step_organization = this.defaultStepOrganization();

        this.m_step_premises_versions = this.defaultStepPremises();

        this.m_step_premises_layout = this.defaultStepLayout();

        this.m_step_create_export_files = this.defaultStepFiles();

        this.m_step_update_event_program = this.defaultStepUpdate();

    } // default

    // Default prompt string: Select a creation process step
    defaultPromptSelect()
    {
        var prompt_select = new DefaultText();

        prompt_select.setDescription("Default prompt string: Select a creation process step");

        prompt_select.setGerman("Bitte Prozess-Schritt wählen");

        prompt_select.setEnglish("Please select process step");

        prompt_select.setFrench("Veuillez sélectionner l'étape du processus");

        prompt_select.setItalian("Seleziona la fase del processo");

        prompt_select.setSwedish("Välj process steg");

        return prompt_select.getText();

    } // defaultPromptSelect

    // Default process step organization
    defaultStepOrganization()
    {
        var select_orgainzation = new DefaultText();

        select_orgainzation.setDescription("Default process step organization");

        select_orgainzation.setGerman("Organisation definieren");

        select_orgainzation.setEnglish("Define organization");

        select_orgainzation.setFrench("Définir l'organisation");

        select_orgainzation.setItalian("Definire l'organizzazione");

        select_orgainzation.setSwedish("Organisation definieren");

        return select_orgainzation.getText();

    } // defaultStepOrganization		
	
    // Default process step premises/version
    defaultStepPremises()
    {
        var select_premises = new DefaultText();

        select_premises.setDescription("Default process step premises/version");

        select_premises.setGerman("Lokal wählen");

        select_premises.setEnglish("Please select process step");

        select_premises.setFrench("Sélectionner des locaux");

        select_premises.setItalian("Seleziona locali");

        select_premises.setSwedish("Välj lokal");

        return select_premises.getText();

    } // defaultStepPremises

    // Default process step premises layout
    defaultStepLayout()
    {
        var create_layout = new DefaultText();

        create_layout.setDescription("Default process step premises layout");

        create_layout.setGerman("Layout kreieren");

        create_layout.setEnglish("Create layout");

        create_layout.setFrench("Créer une mise en page");

        create_layout.setItalian("Crea layout");

        create_layout.setSwedish("Skapa layout");

        return create_layout.getText();

    } // defaultStepLayout

    // Default process step create and export files
    defaultStepFiles()
    {
        var create_layout = new DefaultText();

        create_layout.setDescription("Default process step create and export files");

        create_layout.setGerman("Lokal wählen");

        create_layout.setEnglish("Please select process step");

        create_layout.setFrench("Veuillez sélectionner l'étape du processus");

        create_layout.setItalian("Seleziona la fase del processo");

        create_layout.setSwedish("Välj process steg");

        return create_layout.getText();

    } // defaultStepFiles

    // Default process step files for an updated event program
    defaultStepUpdate()
    {
        var create_layout = new DefaultText();

        create_layout.setDescription("Default process step: Update XML files for an updated event program");

        create_layout.setGerman("Aktualisierung von XML Dateien");

        create_layout.setEnglish("Update of XML files");

        create_layout.setFrench("Mise à jour des fichiers XML");

        create_layout.setItalian("Aggiornamento dei file XML");

        create_layout.setSwedish("Aktualisering av XML Dateien");

        return create_layout.getText();

    } // defaultStepUpdate		

    ///////////////////////////////////////////////////////////////////////////
    /////// End Default Texts /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Set Texts ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Set prompt string select process step
    setPromptSelect(i_step_prompt_select)
    {
        this.m_step_prompt_select = i_step_prompt_select;

    } // setPromptSelect

    // Set process step organization
    setStepOrganization(i_step_organization)
    {
        this.m_step_organization = i_step_organization;

    } // setStepOrganization

    // Set process step premises/version
    setStepPremises(i_step_select_premises)
    {
        this.m_step_premises_versions = i_step_select_premises;

    } // setStepPremises

    // Set process step premises layout
    setStepLayout(i_step_premises_layout)
    {
        this.m_step_premises_layout = i_step_premises_layout;

    } // setStepLayout

    // Set process step create and export files
    setStepFiles(i_step_create_export_files)
    {
        this.m_step_create_export_files = i_step_create_export_files;

    } // setStepFiles

    // Set process step files for an updated event program
    setStepUpdate(i_step_update_event_program)
    {
        this.m_step_update_event_program = i_step_update_event_program;

    } // setStepUpdate

    ///////////////////////////////////////////////////////////////////////////
    /////// End Set Texts /////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Dropdown Functions //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Creates the dropdown
    createDropdown(i_event_function_name_str)
    {
        this.m_dropdown = new DropdownCtrl('id_select_process_step_dropdown', this.m_id_div_select_container);

        this.m_dropdown.setNameArray(this.getDropdownNameArray());

        this.m_dropdown.setSelectOptionNumber(1);

        this.m_dropdown.setOnchangeFunctionName(i_event_function_name_str + '(' + this.m_global_variable_str + ')');

        this.m_dropdown.setTitle('TODO Title');
        
        this.m_dropdown.setAppendString('');

/*

    getHtmlElementLabelString is missing
        this.m_dropdown.setLabelTextPositionLeft();

        this.m_dropdown.setLabelText('Process step TODO');
*/

    } // createDropdown

    // Returns the dropdown select process array
    getDropdownNameArray()
    {
        this.m_step_array = [];

        this.m_step_array[0] = this.m_step_prompt_select;

        this.m_step_array[1] = this.m_step_organization;

        this.m_step_array[2] = this.m_step_premises_versions;

        this.m_step_array[3] = this.m_step_premises_layout;

        this.m_step_array[4] = this.m_step_create_export_files;

        this.m_step_array[5] = this.m_step_update_event_program;

        return  this.m_step_array;

    } // getDropdownNameArray

    // Returns the selected option number
    getSelectedOptionNumber()
    {
        var selected_option_number = this.m_dropdown.getSelectOptionNumber();

        return selected_option_number;

    } // getSelectedOptionNumber


    ///////////////////////////////////////////////////////////////////////////
    /////// End Dropdown Functions ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////



} // SelectStepData
