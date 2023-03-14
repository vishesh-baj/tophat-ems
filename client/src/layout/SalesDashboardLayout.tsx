import React, { useRef } from "react";
import { Close } from "../assets";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import EMS_CLIENT from "../api";

type Props = {};
type FormValues = {
  firstName: string;
  lastName: string;
  primararyContactNumber: string;
  secondaryContactNumber: string;
  primaryAddress: string;
  secondaryAddress: string;
  officialEmail: string;
  personalEmail: string;
  dateOfBirth: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  experience: string;
};

const SalesDashboardLayout = (props: Props) => {
  const schema = yup.object({
    _id: yup.string(),
    firstName: yup.string().required("first name is required"),
  });
  type FormData = yup.InferType<typeof schema>;
  const addEmployeeModalRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const handleClose = (modalRef: any) => {
    if (modalRef.current) {
      modalRef.current.checked = !modalRef.current.checked;
      console.log("Checkbox is checked:", modalRef.current.checked);
      reset({});
    }
  };
  const onAddSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await EMS_CLIENT.post("add-employee", data);
    if (response.status === 200) {
      alert("successfull");
    }
  };
  return (
    <div>
      SalesDashboardLayout
      <div className="w-screen h-screen">
        <h1 className="text-center py-5 text-3xl">Sales Dashboard</h1>
        <div className="flex justify-end py-4 mx-14">
          {/* TODO: ADD SEARCH INPUT */}

          <button
            onClick={() => handleClose(addEmployeeModalRef)}
            className="btn btn-info"
          >
            Add Employee
          </button>
        </div>
        <input
          ref={addEmployeeModalRef}
          type="checkbox"
          id="employee-modal_add"
          className="modal-toggle"
        />

        {/* add employee modal */}
        <div className="modal">
          <div className="modal-box">
            <div className="flex w-full justify-between">
              <h3 className="font-bold text-2xl ">Add Employee</h3>
              <span onClick={() => handleClose(addEmployeeModalRef)}>
                <Close className="h-6 w-6 cursor-pointer text-base-content" />
              </span>
            </div>
            <form
              className="py-4 flex flex-col gap-4"
              onSubmit={handleSubmit(onAddSubmit)}
            >
              <label>firstName</label>
              <input {...register("firstName")} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
              <label>lastName</label>
              <input
                type="text"
                {...register("lastName", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.lastName?.message}
              </span>

              <label>primaryContactNumber</label>
              <input
                {...register("primararyContactNumber", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.primararyContactNumber?.message}
              </span>
              <label>secondaryContactNumber</label>
              <input
                {...register("secondaryContactNumber", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.secondaryContactNumber?.message}
              </span>
              <label>primaryAddress</label>
              <input
                {...register("primaryAddress", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.primaryAddress?.message}
              </span>
              <label>secondaryAddress</label>
              <input
                {...register("secondaryAddress", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.secondaryAddress?.message}
              </span>
              <label>officialEmail</label>
              <input
                {...register("officialEmail", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.officialEmail?.message}
              </span>
              <label>personalEmail</label>
              <input
                {...register("personalEmail", {
                  required: true,
                })}
              />
              <span className="text-customRed1">
                {errors.personalEmail?.message}
              </span>
              <label>DateOfBirth</label>
              <input
                {...register("dateOfBirth", { required: true })}
                type="date"
              />
              <span className="text-customRed1">
                {errors.dateOfBirth?.message}
              </span>

              <label>designation</label>
              <select
                {...register("designation", {
                  required: true,
                })}
                className="select select-bordered m-1"
              >
                <option value="">Select</option>
                <option value="SENIOR">SENIOR</option>
                <option value="JUNIOR">JUNIOR</option>
                <option value="TRAINEE">TRAINEE</option>
              </select>
              <span className="text-customRed1">
                {errors.designation?.message}
              </span>

              <label>department</label>
              <select
                {...register("department", {
                  required: true,
                })}
                className="select select-bordered m-1"
              >
                <option value="">Select</option>
                <option value="BDE">BDE</option>
                <option value="HR">HR</option>
                <option value="DEVELOPER">DEVELOPER</option>
              </select>
              <span className="text-customRed1">
                {errors.department?.message}
              </span>

              <label>experience</label>
              <input
                {...register("experience", {
                  required: true,
                  pattern: /^[0-9+-]+$/,
                })}
              />
              <span className="text-customRed1">
                {errors.experience?.message}
              </span>
              <label>DateOfJoining</label>
              <input
                {...register("dateOfJoining", { required: true })}
                type="date"
              />
              <span className="text-customRed1">
                {errors.dateOfJoining?.message}
              </span>

              <button type="submit" className="btn">
                add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboardLayout;
