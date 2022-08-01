Execute - RuleSet
RuleSet - Rule[]

Rule
    When
        Composition: ALL/ANY/NONE
        SubRules[]:
            Field:[Property Path]
            Operator: [Equals/GreaterThan/LessThen/IN]
            Value: [Hard Coded/Other Field/Data Source]

            Composition: ALL/ANY/NONE
            SubRules[]:
    Then
        Flag: Path (AdvanceExchange:AbleToOffer)
            Value: True/False
            Resource: [String]
            {
                "AdvanceExchange": {
                    "AbleToOffer": {
                       "Value" : true,
                       "Resource": "RS0009" 
                    }
                }
            }

Logic 1:
    Rule - Composite/Simple
    Composite: 
        Identification: Check for field "Composition"
    Execution:
        Execute Each of the SubRule - Get Result - Promise - Parallel
        Combine Results:
            ALL: All of them have to be true
            ANY: Any one have to be true
            NONE: All of them have to be false

Logic 2:
    SubRule Execution
    Value: Hard Coded/Other Field/Data Source
    Other Field: Always start with "F:"
    Data Source: Always Starts with "D:"
    Else its hard coded value
        It can be single Value, or an Array
        If Array: Comma Seperated or Else Single Value

    Field: With property path i.e. ObjA.PropA.PropB.PropC
    Object:
    Input  = {
        ObjA: {
            PropA: {
                PropB: {
                    PropC: "RED"
                }
            },
            PropB: {

            }
        }
    }