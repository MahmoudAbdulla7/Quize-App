import { Link } from "react-router-dom";
import { getData } from "../../ApiUtls/ApiUtls";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Results() {
  const { headers } = useSelector((state: any) => state.userData);
  const[getResults,setGetResults]=useState([])
 

const getAllResults=()=>{

  getData({path:'quiz/result',headers,setState:setGetResults})

}
console.log(getResults);

useEffect(()=>{
getAllResults()
},[])
  return (
    <>

      <div className="completed-quizzes px-3 w-full">
        <div className="border rounded-xl mt-5">
          <div className="header flex justify-between">
            <h5 className="text-lg font-semibold my-2 mx-2">
           Results
            </h5>

          </div>
          <div className="result">
            <div className="overflow-x-auto p-3">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="bg-black ">
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Title
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50 ">
                      Group name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      No. of persons in group
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Participants
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">

                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {getResults.map((result,index)=>
                  <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{result.quiz.title}</td>
                <td className="whitespace-nowrap px-12 py-2 text-gray-700 ">{result.quiz.type}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{result.quiz.status}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{result.participants}</td>
                <td>
                  <Link to ='/dashboard/results/Assembly Language	'>
                      <button className="border-0 mx-3 bg-secondry rounded-xl px-3">
                        View
                      </button>
                      </Link>
                    </td>


                  </tr>
)}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
