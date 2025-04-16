import React from 'react'
import { useClassContext } from './ClassContext';
import SubTitle from '../SubTitle';

function InputSection() {
    
    const {className, setClassName,
        attributeName, setAttributeName,
        methodName, setMethodName,
        classInput, setClassInput,
        generalRelation, setGeneralRelation,
        generalRelationInput, setGeneralRelationInput,
        relation, setRelation,
        relationInput, setRelationInput} = useClassContext();

    //add clsses to classInput
    function addClass(){
        if(className.length === 0) return;
        setClassInput((prev) => {
            return [...prev, {className: className, attributes: [], methods: []}]
        })
        setClassName('');
    }

    //add attributes to classInput
    function addAttribute(){
        if(attributeName.className.length === 0 || attributeName.name.length === 0) return;
        let updatedClass = classInput.map((classes) => {
            if(classes.className === attributeName.className){
                return {
                    ...classes, attributes: [...classes.attributes, `${attributeName.name}: ${attributeName.attributeType}`]
                }
            }
            return classes;
        })
        setClassInput(updatedClass);
        setAttributeName({...attributeName, name:""});
        console.log("huya");
    }

    //add methods to classInput
    function addMethod(){
        if(methodName.methodClass.length === 0 || methodName.name.length === 0) return;
        let updatedClass = classInput.map((classes) => {
            if(classes.className === methodName.methodClass){
                return {
                    ...classes, methods: [...classes.methods, `${methodName.name}(): ${methodName.methodType}`]
                }
            }
            return classes;
        })
        setClassInput(updatedClass);
    }

    //add general relation to classInput
    function handleGeneralRelation(){
        if(generalRelationInput.from.length === 0 || generalRelationInput.to.length === 0) return;
        setGeneralRelation([...generalRelation, generalRelationInput]);
        setGeneralRelationInput({from:"", to:""});
    }

    function handleRelation(){
        if(relationInput.from.length === 0 || relationInput.assciationType.length === 0 || relationInput.to.length === 0) return;
        setRelation([...relation, relationInput]);
        setRelationInput({from:"", multiplicity1:"", associationName: "", assciationType:"", direction:"", to:"", multiplicity2:""});
    }
  return (
    <div>
        {/* Add Class to classInput */}
        <SubTitle text1="Add Class" />
        <div>
            <input
                type="text"
                placeholder='Class Name'
                className='border p-2 rounded w-full'
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />
            <button onClick={addClass} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Class</button>
        </div>

        {/* Add Attribute to classInput */}
        <SubTitle text1={"Add Attribute"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setAttributeName({...attributeName, className:e.target.value})}
                    value={attributeName.className}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <input onChange={(e) => setAttributeName({...attributeName, name: e.target.value})} value={attributeName.name} type="text" className='border p-2 rounded w-full' placeholder='Attribute Name'/>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setAttributeName({...attributeName, attributeType:e.target.value})}
                >
                    <option value="Integer">Integer</option>
                    <option value="Float">Float</option>
                    <option value="String">String</option>
                    <option value="Long">Long</option>
                    <option value="Double">Double</option>
                    <option value="Boolean">Boolean</option>
                </select>
            </div>

            <button onClick={addAttribute} value={attributeName} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Attribute</button>
        </div>

        {/* Add Method to classInput */}
        <SubTitle text1={"Add Method"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setMethodName({...methodName, methodClass:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <input onChange={(e) => setMethodName({...methodName, name:e.target.value})} type="text" className='border p-2 rounded w-full' placeholder='Method Name'/>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setMethodName({...methodName, methodType: e.target.value})}
                >
                    <option value="Void">Void</option>
                    <option value="Integer">Integer</option>
                    <option value="Float">Float</option>
                    <option value="String">String</option>
                    <option value="Long">Long</option>
                    <option value="Double">Double</option>
                    <option value="Boolean">Boolean</option>
                </select>
            </div>

            <button onClick={addMethod} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Method</button>
        </div>

        {/* Add general relationship*/}
        <SubTitle text1={"Add Generalization/Specialization"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setGeneralRelationInput({...generalRelationInput, from:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <p className='flex items-center justify-between w-full rounded shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 mx-0 my-1 sm:m-2'>
                    Extends
                </p>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setGeneralRelationInput({...generalRelationInput, to:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>  
            </div>

            <button onClick={handleGeneralRelation} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Relation</button>
        </div>

        {/* Add relation */}
        <SubTitle text1={"Add Relation"} />
        <div>
            <div className='flex gap-5 mb-3'>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                onChange={(e) => setRelationInput({...relationInput, from:e.target.value})}
                >
                    <option>Select Class 1</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                onChange={(e) => setRelationInput({...relationInput, multiplicity1:e.target.value})}
                >
                    <option>Multiplicity</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='0..1'>0..1</option>
                    <option value='0..*'>0..*</option>
                    <option value='1..*'>1..*</option>
                    <option value='*'>*</option>
                </select>
            </div>

            <div className='flex gap-5 mb-3'>
                <input onChange={(e) => setRelationInput({...relationInput, associationName:e.target.value})} value={relationInput.associationName} className='border p-2 rounded w-1/3' placeholder='Association Name' type="text" />

                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                onChange={(e) => setRelationInput({...relationInput, assciationType:e.target.value})}
                >
                    <option>Association Type</option>
                    <option value="--">Simple Association</option>
                    <option value="o--">Aggregation</option>
                    <option value="*--">Composition</option>
                    <option value="-->">Dependency</option>
                </select>

                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                onChange={(e) => setRelationInput({...relationInput, direction:e.target.value})}
                >
                    <option>Direction</option>
                    <option value="">To</option>
                    <option value="">From</option>
                </select>
            </div>

            <div className='flex gap-5 '>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                onChange={(e) => setRelationInput({...relationInput, to:e.target.value})}
                >
                    <option>Select Class 2</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                onChange={(e) => setRelationInput({...relationInput, multiplicity2:e.target.value})}
                >
                    <option>Multiplicity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="0..1">0..1</option>
                    <option value="0..*">0..*</option>
                    <option value="1..*">1..*</option>
                    <option value="*">*</option>
                </select>
            </div>

            <button onClick={handleRelation} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Relation</button>
        </div>
    </div>
  )
}

export default InputSection