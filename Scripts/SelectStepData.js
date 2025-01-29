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

        // Tooltip for the dropdown
        this.m_tooltip_dropdown = '';

        // Label for the dropdown
        this.m_label_dropdown = '';

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

        this.m_tooltip_dropdown = this.defaultTooltipDropdown();

        this.m_label_dropdown = this.defaultLabelDropdown();

    } // default

    // Default prompt string: Select a creation process step
    defaultPromptSelect()
    {
        var prompt_select = new DefaultText();

        prompt_select.setDescription("Default prompt string: Select a creation process step");

        prompt_select.setGerman("Prozess-Schritt wählen");

        prompt_select.setEnglish("Select process step");

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

        create_layout.setGerman("Dateien kreieren und exportiren");

        create_layout.setEnglish("Create and export files");

        create_layout.setFrench("Créer et exporter des fichiers");

        create_layout.setItalian("Crea ed esporta file");

        create_layout.setSwedish("Skapa och exportera filer");

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

    // Default tooltip for the dropdown
    defaultTooltipDropdown()
    {
        var tooltip_dropdown = new DefaultText();

        tooltip_dropdown.setDescription("Default tooltip for the dropdown");

        tooltip_dropdown.setGerman("Nach der Wahl des Prozess-Schritts können Daten für diesen Schritt zugefügt oder geändert werden");

        tooltip_dropdown.setEnglish("After selection of the process step may data for this step be added or changed");

        tooltip_dropdown.setFrench("Après la sélection de l'étape du processus, les données de cette étape peuvent être ajoutées ou modifiées.");

        tooltip_dropdown.setItalian("Dopo la selezione della fase del processo è possibile aggiungere o modificare i dati per questa fase");

        tooltip_dropdown.setSwedish("Efter val av process steg kan data läggas till eller ändras för detta steg");

        return tooltip_dropdown.getText();
		
    } // defaultTooltipDropdown

    // Default label for the dropdown
    defaultLabelDropdown()
    {
        var label_dropdown = new DefaultText();

        label_dropdown.setDescription("Default label for the dropdown");

        label_dropdown.setGerman("Schritt");

        label_dropdown.setEnglish("Step");

        label_dropdown.setFrench("Étape");

        label_dropdown.setItalian("Étape");

        label_dropdown.setSwedish("Steg");

        return label_dropdown.getText();
		
    } // defaultLabelDropdown

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

    // Set tooltip for the dropdown
    setTooltipDropdown(i_tooltip_dropdown)
    {
        this.m_tooltip_dropdown = i_tooltip_dropdown;

    } // setTooltipDropdown

    // Set label for the dropdown
    setLabelDropdown(i_label_dropdown)
    {
        this.m_label_dropdown = i_label_dropdown;

    } // setLabelDropdown
	
    ///////////////////////////////////////////////////////////////////////////
    /////// End Set Texts /////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Get Texts ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get tooltip for the dropdown
    getTooltipDropdown()
    {
        return this.m_tooltip_dropdown

    } // setTooltipDropdown

	// Get label for the dropdown
    getLabelDropdown()
    {
        return this.m_label_dropdown

    } // setLabelDropdown

    ///////////////////////////////////////////////////////////////////////////
    /////// End Get Texts /////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Dropdown Functions //////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Creates the dropdown
    createDropdown(i_event_function_name_str)
    {
        this.m_dropdown = new DropdownCtrl(this.idDropdown(), this.m_id_div_select_container);

        this.m_dropdown.setNameArray(this.getDropdownNameArray());

        this.m_dropdown.setSelectOptionNumber(1);

        this.m_dropdown.setOnchangeFunctionName(i_event_function_name_str + '(' + this.m_global_variable_str + ')');

        this.m_dropdown.setTitle(this.getTooltipDropdown());

        this.m_dropdown.setLabelText('&nbsp;&nbsp;' + this.getLabelDropdown() + '&nbsp;&nbsp;');

        this.m_dropdown.setLabelTextPositionRight();
        
        this.m_dropdown.setAppendString('');

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

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Id Element Hide Functions ///////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the identity of the dropdown
    idDropdown()
    {
        return 'id_select_process_step_dropdown';

    } // idDropdown

    // Returns the dropdown element
    elementDropdown()
    {
        return document.getElementById(this.idDropdown());

    }// elementDropdown

    // Returns the <div> element with elements elementDivDisplay and elementDivSelect
    elementDivDisplaySelect()
    {
        return document.getElementById(this.m_id_div_select_display_step);

    }// elementDivDisplay

    // Returns the <div> element that diplays the process step name
    elementDivDisplay()
    {
        return document.getElementById(this.m_id_div_display_container);

    }// elementDivDisplay

    // Returns the <div> element with the dropdown for the selection of step
    elementDivSelect()
    {
        return document.getElementById(this.m_id_div_select_container);

    }// elementDivDisplay

    ///////////////////////////////////////////////////////////////////////////
    /////// End Id Element Hide Functions /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Update Controls /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Updates the controls 
    updateControls()
    {
        this.displayStepName();

    } // updateControls

    // Display the step name
    displayStepName()
    {
        var selected_option_number = this.getSelectedOptionNumber();

        var index_name_array = selected_option_number - 1;

        var step_name = 'Name array is null';

        if (this.m_step_array != null)
        {
            step_name = this.m_step_array[index_name_array];
        }

        this.elementDivDisplay().innerHTML = step_name;

    } // displayStepName

    ///////////////////////////////////////////////////////////////////////////
    /////// End Update Controls ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // SelectStepData
