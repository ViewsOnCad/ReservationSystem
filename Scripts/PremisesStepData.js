// File: PremisesStepData.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// Content
// =======
//
// Class that holds data for the premises step
//
// The corresponding class PremisesStep has static functions for the premises step
// With this division in two classes it is possible to define event functions
// in the static class

class PremisesStepData
{
    constructor(i_id_div_select_display_step, i_id_div_display_container, i_id_div_select_container, i_global_variable_str)
    {
        // The identity of the container <div> for the premises step
        this.m_id_div_select_display_step = i_id_div_select_display_step;

        // The identity of the <div> that diplays the premises step
        this.m_id_div_display_container = i_id_div_display_container;

        // The identity of the container <div> for the premises dropdown control 
        this.m_id_div_select_container = i_id_div_select_container;

        // The name of the global variable for the instance of this class
        this.m_global_variable_str = i_global_variable_str;

        // Array of strings defining the premises directories
        this.m_premises_array = null;

        // Prompt string select organization
        this.m_premises_prompt_select = '';

        // Tooltip for the dropdown
        this.m_tooltip_dropdown = '';

        // Label for the dropdown
        this.m_label_dropdown = '';

        // Select premises dropdown
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

        this.m_tooltip_dropdown = this.defaultTooltipDropdown();

        this.m_label_dropdown = this.defaultLabelDropdown();

    } // default

    // Default prompt string: Select premises
    defaultPromptSelect()
    {
        var prompt_select = new DefaultText();

        prompt_select.setDescription("Default prompt string: Select premises");

        prompt_select.setGerman("Lokal-Ordner wählen");

        prompt_select.setEnglish("Select premises directory");

        prompt_select.setFrench("Sélectionner l'annuaire des locaux");

        prompt_select.setItalian("Seleziona la directory dei locali");

        prompt_select.setSwedish("Välj lokal");

        return prompt_select.getText();

    } // defaultPromptSelect

    // Default tooltip for the dropdown
    defaultTooltipDropdown()
    {
        var tooltip_dropdown = new DefaultText();

        tooltip_dropdown.setDescription("Default tooltip for the premises dropdown");

        tooltip_dropdown.setGerman("Bitte Lokal-Ordner wählen. Wenn der Lokal/version nicht existiert, bitte Ordner zufügen wählen");

        tooltip_dropdown.setEnglish("Please select the organization folder. If the organization not exists, plese select Add folder");

        tooltip_dropdown.setFrench("Veuillez sélectionner le dossier organisationnel. Si l'organisation n'existe pas, veuillez sélectionner Ajouter un dossier");

        tooltip_dropdown.setItalian("Seleziona la cartella organizzativa. Se l'organizzazione non esiste, seleziona Aggiungi cartella");

        tooltip_dropdown.setSwedish("Välj mapp för den aktuella lokalen. Om lokalen inte definierats, välj Lägg till lokal ");

        return tooltip_dropdown.getText();
		
    } // defaultTooltipDropdown

    // Default label for the dropdown
    defaultLabelDropdown()
    {
        var label_dropdown = new DefaultText();

        label_dropdown.setDescription("Default label for the premises");

        label_dropdown.setGerman("Lokal");

        label_dropdown.setEnglish("Premises");

        label_dropdown.setFrench("Organisation");

        label_dropdown.setItalian("Premesse");

        label_dropdown.setSwedish("Lokal");

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
        return this.m_tooltip_dropdown;

    } // setTooltipDropdown

	// Get label for the dropdown
    getLabelDropdown()
    {
        return this.m_label_dropdown;

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
        return 'id_select_premises_dropdown';

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
        this. displayPremisesName();

    } // updateControls

    // Display the step name
    displayPremisesName()
    {
        var selected_option_number = this.getSelectedOptionNumber();

        var index_name_array = selected_option_number - 1;

        var step_name = 'Name array is null';

        if (this.m_step_array != null)
        {
            step_name = this.m_step_array[index_name_array];
        }

        this.elementDivDisplay().innerHTML = step_name;

    } // displayPremisesName

    ///////////////////////////////////////////////////////////////////////////
    /////// End Update Controls ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // PremisesStepData