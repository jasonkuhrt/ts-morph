﻿import {NamedNodeStructure, ScopeableNodeStructure, ExtendsClauseableNodeStructure, TypeParameteredNodeStructure, DocumentationableNodeStructure,
    AmbientableNodeStructure, ExportableNodeStructure} from "./../base";
import {PropertySignatureStructure} from "./PropertySignatureStructure";
import {MethodSignatureStructure} from "./MethodSignatureStructure";
import {ConstructSignatureDeclarationStructure} from "./ConstructSignatureDeclarationStructure";

export interface InterfaceDeclarationStructure
    extends NamedNodeStructure, InterfaceDeclarationSpecificStructure, ExtendsClauseableNodeStructure, TypeParameteredNodeStructure,
        DocumentationableNodeStructure, AmbientableNodeStructure, ExportableNodeStructure
{
}

export interface InterfaceDeclarationSpecificStructure {
    constructSignatures?: ConstructSignatureDeclarationStructure[];
    properties?: PropertySignatureStructure[];
    methods?: MethodSignatureStructure[];
}
