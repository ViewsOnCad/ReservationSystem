// File: UtilCtrl.js
// Date: 2025-01-28
// Author: Gunnar Lidén

// File content
// =============
//
// Class with utility functions for controls

class UtilCtrl
{
    // Returns the label string. Sample string:
    // <label for="id_text_box" title= "Tooltip for the control ..." >Label text</label>
    static getHtmlElementLabelString(i_label_str, i_id_control, i_title)
    {
        var ret_label_str = '';

        if (i_label_str == 0)
        {
            alert("UtilCtrl.getHtmlElementLabelString Input label string is not set");

            return ret_label_str;
        }

        if (i_id_control == 0)
        {
            alert("UtilCtrl.getHtmlElementLabelString Input control identity string must be set");

            return ret_label_str;
        }

        ret_label_str = ret_label_str + '<label for= "' + i_id_control + '" ';

        if (i_title.length > 0)
        {
            ret_label_str = ret_label_str + ' title="' + i_title + '" ';
        }

        ret_label_str = ret_label_str + '>';

        ret_label_str = ret_label_str + i_label_str;

        ret_label_str = ret_label_str + '</label>';

        return ret_label_str;

    } // getHtmlElementLabelString


} // UtilCtrl

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Utility Functions /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

    // Returns the label string. Sample string:
    // <label for="id_text_box" title= "Tooltip for the control ..." >Label text</label>
    function getHtmlElementLabelString(i_label_str, i_id_control, i_title)
    {
        var ret_label_str = '';

        if (i_label_str == 0)
        {
            alert("getHtmlElementLabelString Input label string is not set");

            return ret_label_str;
        }

        if (i_id_control == 0)
        {
            alert("getHtmlElementLabelString Input control identity string must be set");

            return ret_label_str;
        }

        ret_label_str = ret_label_str + '<label for= "' + i_id_control + '" ';

        if (i_title.length > 0)
        {
            ret_label_str = ret_label_str + ' title="' + i_title + '" ';
        }

        ret_label_str = ret_label_str + '>';

        ret_label_str = ret_label_str + i_label_str;

        ret_label_str = ret_label_str + '</label>';

        return ret_label_str;

    } // getHtmlElementLabelString
    
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Utility Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


