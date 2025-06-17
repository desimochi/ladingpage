export default function Eligibility(){
    return(
        <div  className="text-gray-700">
            <h3 className="text-2xl font-bold mb-3">Eligibility & Selection Criteria</h3>
            <p>Taxila accepts CAT, CMAT and XAT. Aspirants seeking admission to Taxila's PGDM in Business Analytics must have a minimum of 50% marks in graduation for the General category and 45% for the reserved category, as per AICTE norms. Students appearing in their final year of graduation are also eligible to apply.</p>
            <p className="py-3 font-bold">Before the final selection, general profiling of the applicant is conducted based on the following parameters.</p>
            <table className="w-full text-center mt-3 border">
                                    <thead>
                                        <tr className="border">
                                            <th className="p-2">Parameter</th>
                                            <th>Weightage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">X Marks</td>
                                            <td className="p-2">10%</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">XII Marks</td>
                                            <td className="p-2">10%</td>
                                        </tr >
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Graduation Marks</td>
                                            <td className="p-2">10%</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Qualifying test Score</td>
                                            <td className="p-2">20%**</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Case study analysis</td>
                                            <td className="p-2">20%</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Personal Interview</td>
                                            <td className="p-2">30%</td>
                                        </tr>
                                       <tr className="border border-gray-400/10">
                                            <td className="p-2">Work Experience</td>
                                            <td className="p-2">10%</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Personnel Interview 2</td>
                                            <td className="p-2">10%</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">Communication with Officer</td>
                                            <td className="p-2">10%</td>
                                        </tr>
                                    </tbody>
                                </table>
            <p>** Scaling of Qualifying Test Weightage</p>
            <table className="w-full mt-4 text-sm">
                                    <thead>
                                        <tr >
                                            <th>CAT/XAT Percentile</th>
                                            <th>MAT (Composite Score)</th>
                                            <th>CMAT (Total Score)</th>
                                            <th>Weightage on 20</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">10 - 34</td>
                                            <td className="p-2">200-299</td>
                                            <td className="p-2">10 - 24</td>
                                            <td className="p-2">4</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">35 - 39</td>
                                            <td className="p-2">300-399</td>
                                            <td className="p-2">25 - 49</td>
                                            <td className="p-2">6</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">40 - 44</td>
                                            <td className="p-2">400-499</td>
                                            <td className="p-2">40 - 59</td>
                                            <td className="p-2">8</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">45 - 49</td>
                                            <td className="p-2">500-599</td>
                                            <td className="p-2">60 - 99</td>
                                            <td className="p-2">10</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">50 - 59</td>
                                            <td className="p-2">600-649</td>
                                            <td className="p-2">100 - 149</td>
                                            <td className="p-2">12</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">60 - 69</td>
                                            <td className="p-2">650-699</td>
                                            <td className="p-2">150 - 249</td>
                                            <td className="p-2">14</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">70 - 79</td>
                                            <td className="p-2">700</td>
                                            <td className="p-2"> More Than 250</td>
                                            <td className="p-2">16</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">80 - 90</td>
                                            <td className="p-2">700</td>
                                            <td className="p-2"></td>
                                            <td className="p-2">18</td>
                                        </tr>
                                        <tr className="border border-gray-400/10">
                                            <td className="p-2">More Than 91</td>
                                           <td className="p-2">700</td>
                                            <td className="p-2"> </td>
                                            <td className="p-2">20</td>
                                        </tr>
                                    </tbody>
                                </table>
        </div>
    )
}