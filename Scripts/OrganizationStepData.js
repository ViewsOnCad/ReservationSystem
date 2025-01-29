// File: OrganizationStepData.js
// Date: 2025-01-29
// Author: Gunnar Lidén

// Content
// =======
//
// Class that holds data for the organization step
//
// The corresponding class OrganizationStep has static functions for the organization step
// With this division in two classes it is possible to define event functions
// in the static class

class OrganizationStepData
{

    constructor(i_id_div_select_display_step, i_id_div_display_container, i_id_div_select_container, i_global_variable_str)
    {
        // The identity of the container <div> for the organization step
        this.m_id_div_select_display_step = i_id_div_select_display_step;

        // The identity of the <div> that diplays the process step
        this.m_id_div_display_container = i_id_div_display_container;

        // The identity of the container <div> for the organization dropdown control 
        this.m_id_div_select_container = i_id_div_select_container;

        // The name of the global variable for the instance of this class
        this.m_global_variable_str = i_global_variable_str;

        // Array of strings defining the organization directories
        this.m_organization_array = null;

        // Prompt string select organization
        this.m_organization_prompt_select = '';

        // Tooltip for the dropdown
        this.m_tooltip_dropdown = '';

        // Label for the dropdown
        this.m_label_dropdown = '';

        // Tooltip for the textbox
        this.m_tooltip_textbox = '';

        // Label for the textbox
        this.m_label_textbox = '';

        // Select organization step dropdown
        this.m_dropdown = null;

        // Textbox displaying the organization name
        this.m_textbox = null;

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

        this.m_tooltip_textbox = this.defaultTooltipTextbox();

        this.m_label_textbox = this.defaultLabelTextbox();

    } // default

    // Default prompt string: Select an organization
    defaultPromptSelect()
    {
        var prompt_select = new DefaultText();

        prompt_select.setDescription("Default prompt string: Select an organization");

        prompt_select.setGerman("Organisation Ordner wählen");

        prompt_select.setEnglish("Select organization directory");

        prompt_select.setFrench("Sélectionnez le répertoire de l'organisation");

        prompt_select.setItalian("Seleziona la directory dell'organizzazione");

        prompt_select.setSwedish("Välj organisationsmapp");

        return prompt_select.getText();

    } // defaultPromptSelect

    // Default tooltip for the dropdown
    defaultTooltipDropdown()
    {
        var tooltip_dropdown = new DefaultText();

        tooltip_dropdown.setDescription("Default tooltip for the organization dropdown");

        tooltip_dropdown.setGerman("Bitte Organisationsordner wählen. Wenn der Organisation nicht existiert, bitte Ordner zufügen wählen");

        tooltip_dropdown.setEnglish("Please select the organization folder. If the organization not exists, plese select Add folder");

        tooltip_dropdown.setFrench("Veuillez sélectionner le dossier organisationnel. Si l'organisation n'existe pas, veuillez sélectionner Ajouter un dossier");

        tooltip_dropdown.setItalian("Seleziona la cartella organizzativa. Se l'organizzazione non esiste, seleziona Aggiungi cartella");

        tooltip_dropdown.setSwedish("Välj mapp för den aktuella organisationen. Om organisationen inte definierats, välj Lägg till oganisationsmapp ");

        return tooltip_dropdown.getText();
		
    } // defaultTooltipDropdown

    // Default label for the dropdown
    defaultLabelDropdown()
    {
        var label_dropdown = new DefaultText();

        label_dropdown.setDescription("Default label for the dropdown");

        label_dropdown.setGerman("Organisation");

        label_dropdown.setEnglish("Organization");

        label_dropdown.setFrench("Organisation");

        label_dropdown.setItalian("Organizzazione");

        label_dropdown.setSwedish("Organisation");

        return label_dropdown.getText();
		
    } // defaultLabelDropdown

    // Default tooltip for the textbox
    defaultTooltipTextbox()
    {
        var tooltip_textbox = new DefaultText();

        tooltip_textbox.setDescription("Default tooltip for the organization textbox");

        tooltip_textbox.setGerman("Zeigt die Organistaion-Ordner. In diesem Ordner sind Ordner und Dateien für alle Lokale. ");

        tooltip_textbox.setEnglish("Displays the organisation directory. All sub-directories and files for all of the organisations premises are in this directory");

        tooltip_textbox.setFrench("Affiche le répertoire de l'organisation. Tous les sous-répertoires et fichiers de tous les locaux de l'organisation se trouvent dans ce répertoire.");

        tooltip_textbox.setItalian("Visualizza la directory dell'organizzazione. Tutte le sottodirectory e i file di tutte le sedi dell'organizzazione si trovano in questa directory");

        tooltip_textbox.setSwedish("Visar organisationsmappens namn. I denna mapp finns alla undermappar och filer för alla organisationens lokaler. ");

        return tooltip_textbox.getText();
        
    } // defaultTooltipDropdown

    // Default label for the textbox
    defaultLabelTextbox()
    {
        var label_textbox = new DefaultText();

        label_textbox.setDescription("Default label for the dropdown");

        label_textbox.setGerman("Organisation");

        label_textbox.setEnglish("Organization");

        label_textbox.setFrench("Organisation");

        label_textbox.setItalian("Organizzazione");

        label_textbox.setSwedish("Organisation");

        return label_textbox.getText();
        
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

    // Set tooltip for the textbox
    setTooltipTextbox(i_tooltip_textbox)
    {
        this.m_tooltip_textbox = i_tooltip_textbox;

    } // setTooltipTextbox

    // Set label for the textbox
    setLabelTextbox(i_label_textbox)
    {
        this.m_label_textbox = i_label_textbox;

    } // setLabelTextbox
	
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

    // Get tooltip for the textbox
    getTooltipTextbox()
    {
        return this.m_tooltip_textbox;

    } // getTooltipTextbox

	// Get label for the textbox
    getLabelTextbox()
    {
        return this.m_label_textbox;

    } // getLabelTextbox

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
        this.m_organization_array = [];

        this.m_organization_array[0] = this.m_step_prompt_select;

        return  this.m_organization_array;

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
    /////// Start Textbox Functions ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Create the textbox that displays the organization name
    createTextbox()
    {
        this.m_textbox = new TextboxCtrl(this.idTextbox(), this.m_id_div_display_container);

        this.m_textbox.setLabelText(this.getLabelTextbox() + '&nbsp;&nbsp;');

        this.m_textbox.setLabelTextPositionLeft();

        this.m_textbox.setSize("30");

        this.m_textbox.setReadOnlyFlag(true);

        this.m_textbox.setTitle(this.getTooltipTextbox());

    } // createTextbox

    ///////////////////////////////////////////////////////////////////////////
    /////// End Textbox Functions /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Id Element Hide Functions ///////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the identity of the dropdown
    idDropdown()
    {
        return 'id_select_organization_dropdown';

    } // idDropdown

    // Returns the dropdown element
    elementDropdown()
    {
        return document.getElementById(this.idDropdown());

    }// elementDropdown

    // Returns the identity of the textbox displaying the organization name
    idTextbox()
    {
        return 'id_display_organization_textbox';

    } // idTextbox

    // Returns the element textbox displaying the organization name
    elementTextbox()
    {
        return document.getElementById(this.idTextbox());

    }// elementTextbox

    // Returns the <div> element with elements elementDivDisplay and elementDivSelect
    elementDivDisplaySelect()
    {
        return document.getElementById(this.m_id_div_select_display_step);

    }// elementDivDisplay

    // Hides the <div> element with elements elementDivDisplay and elementDivSelect
    hideDivDisplaySelect()
    {
       this.elementDivDisplaySelect().style.display = 'none';

    }// hideDivDisplaySelect

    // Displays the <div> element with elements elementDivDisplay and elementDivSelect
    displayDivDisplaySelect()
    {
       this.elementDivDisplaySelect().style.display = 'block';

    }// displayDivDisplaySelect

    // Returns the <div> element that diplays the process step name
    elementDivDisplay()
    {
        return document.getElementById(this.m_id_div_display_container);

    }// elementDivDisplay

    // Hides the <div> element elementDivDisplay
    hideDivDisplay()
    {
       this.elementDivDisplay().style.display = 'none';

    }// hideDivDisplay

    // Displays the <div> element elementDivDisplay
    displayDivDisplay()
    {
       this.elementDivDisplay().style.display = 'block';

    }// displayDivDisplay

    // Returns the <div> element with the dropdown for the selection of step
    elementDivSelect()
    {
        return document.getElementById(this.m_id_div_select_container);

    }// elementDivDisplay

    // Hides the <div> element elementDivSelect
    hideDivSelect()
    {
       this.elementDivSelect().style.display = 'none';

    }// hideDivSelect

    // Displays the <div> element elementDivSelect
    displayDivSelect()
    {
       this.elementDivSelect().style.display = 'block';

    }// displayDivSelect     

    ///////////////////////////////////////////////////////////////////////////
    /////// End Id Element Hide Functions /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Update Controls /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Updates the controls 
    updateControls()
    {
        var directory_name = this. getDirectoryName();

        console.log("OrganizationStepData.updateControls directory_name= " + directory_name);

    } // updateControls

    // Returns the directory name
    getDirectoryName()
    {
        var selected_option_number = this.getSelectedOptionNumber();

        var index_name_array = selected_option_number - 1;

        var directory_name = 'Name array is null';

        if (this.m_organization_array != null)
        {
            directory_name = this.m_organization_array[index_name_array];
        }

       return directory_name;

    } // getDirectoryName


    ///////////////////////////////////////////////////////////////////////////
    /////// End Update Controls ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // OrganizationStepData