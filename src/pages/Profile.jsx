import Linechart from "../components/LineChart";
import UserChart from "../components/UserChart";
import data from "../components/employee.json";

export default function Profile() {
    return (
        <div className="">
            <p className="text-2xl lg:text-5xl ml-8 mb-8 pt-6">
                Hello Shibin!{" "}
            </p>
            <div className="scale-50 lg:bg-white p-8 md:scale-100 origin-left">
                <UserChart employeeData={data.employees} />
            </div>
            <div className="flex gap-6 flex-wrap w-full p-12 mb-8">
                <div className="border p-6 rounded-2xl mt-8 w-[18rem] bg-blue-50/50">
                    <h1 className="text-2xl font-bold mb-3">Absence rate</h1>
                    <p>
                        Your absence rate is 20% above the last month, Please
                        take care of your mental health
                    </p>
                </div>
                <div className="border p-6 rounded-2xl mt-8 w-[18rem] bg-blue-50/50">
                    <h1 className="text-2xl font-bold mb-3">
                        Project Completion rate
                    </h1>
                    <p>
                        Your Project Completion rate is 20% above the last
                        month, Please take care of your mental health
                    </p>
                </div>
                <div className="border p-6 rounded-2xl mt-8 w-[18rem] bg-blue-50/50">
                    <h1 className="text-2xl font-bold mb-3">
                        Overtime Frequency
                    </h1>
                    <p>
                        Your Overtime frequency is 20% above the last month,
                        Please take care of your mental health
                    </p>
                </div>
            </div>
        </div>
    );
}
