"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Shield,
  UserCog,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Key,
  Lock,
  Eye,
  EyeOff,
  X,
  ChevronDown,
} from "lucide-react";

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Users data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      email: "ahmed.hassan@medical.com",
      phone: "+966 50 123 4567",
      role: "healthcare_practitioner",
      status: "active",
      joinedDate: "2024-01-10",
      licenseId: "SCH-2024-12345",
    },
    {
      id: 2,
      name: "Sarah Al-Omari",
      email: "sarah.omari@exhibitor.com",
      phone: "+966 55 789 0123",
      role: "exhibitor",
      status: "active",
      joinedDate: "2024-01-15",
      company: "MedTech Solutions",
    },
    {
      id: 3,
      name: "Khalid Al-Mansour",
      email: "khalid.mansour@pharma.com",
      phone: "+966 54 456 7890",
      role: "sponsor",
      status: "active",
      joinedDate: "2024-01-20",
      company: "PharmaCorp Intl.",
    },
    {
      id: 4,
      name: "Fatima Al-Zahrani",
      email: "fatima.zahrani@clinic.com",
      phone: "+966 53 234 5678",
      role: "healthcare_practitioner",
      status: "inactive",
      joinedDate: "2024-01-05",
      licenseId: "SCH-2024-67890",
    },
    {
      id: 5,
      name: "Omar Al-Jabri",
      email: "omar.jabri@tech.com",
      phone: "+966 52 345 6789",
      role: "exhibitor",
      status: "pending",
      joinedDate: "2024-03-10",
      company: "HealthAI Systems",
    },
    {
      id: 6,
      name: "Nora Al-Ghamdi",
      email: "nora.ghamdi@wellness.com",
      phone: "+966 56 789 0123",
      role: "sponsor",
      status: "active",
      joinedDate: "2024-02-01",
      company: "Wellness Global",
    },
  ]);

  const roles = [
    { value: "healthcare_practitioner", label: "Healthcare Practitioner", icon: UserCheck, color: "blue" },
    { value: "exhibitor", label: "Exhibitor", icon: Users, color: "cyan" },
    { value: "sponsor", label: "Sponsor", icon: Shield, color: "purple" },
    { value: "admin", label: "Admin", icon: UserCog, color: "amber" },
  ];

  const getRoleBadge = (role) => {
    const roleConfig = {
      healthcare_practitioner: { label: "HCP", color: "blue", bg: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      exhibitor: { label: "Exhibitor", color: "cyan", bg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
      sponsor: { label: "Sponsor", color: "purple", bg: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      admin: { label: "Admin", color: "amber", bg: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
    };
    return roleConfig[role] || roleConfig.healthcare_practitioner;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return { icon: CheckCircle, label: "Active", color: "emerald", bg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" };
      case "inactive":
        return { icon: XCircle, label: "Inactive", color: "red", bg: "bg-red-500/20 text-red-400 border-red-500/30" };
      case "pending":
        return { icon: Clock, label: "Pending", color: "amber", bg: "bg-amber-500/20 text-amber-400 border-amber-500/30" };
      default:
        return { icon: Clock, label: "Unknown", color: "gray", bg: "bg-white/10 text-gray-300 border-white/10" };
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDeleteUser = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setShowDeleteConfirm(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
            Users Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage portal users, roles, and permissions
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="relative px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <Plus className="w-4 h-4" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: users.length, icon: Users, color: "indigo" },
          { label: "Active", value: users.filter((u) => u.status === "active").length, icon: UserCheck, color: "emerald" },
          { label: "Pending", value: users.filter((u) => u.status === "pending").length, icon: Clock, color: "amber" },
          { label: "Inactive", value: users.filter((u) => u.status === "inactive").length, icon: UserX, color: "red" },
        ].map((stat, idx) => (
          <div key={idx} className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-2 bg-${stat.color}-500/20 rounded-lg border border-${stat.color}-500/30`}>
                <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-5 border-b border-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all"
              />
            </div>

            {/* Role Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
              >
                <option value="all">All Roles</option>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-12 text-center">
                    <Users className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">No users found</p>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const roleBadge = getRoleBadge(user.role);
                  const statusBadge = getStatusBadge(user.status);
                  const StatusIcon = statusBadge.icon;
                  return (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-300">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            <span className="text-white text-xs font-bold">
                              {user.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{user.name}</p>
                            {user.company && (
                              <p className="text-xs text-gray-400">{user.company}</p>
                            )}
                            {user.licenseId && (
                              <p className="text-xs text-gray-500">License: {user.licenseId}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <Mail className="w-3 h-3 text-gray-400" />
                            {user.email}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <Phone className="w-3 h-3 text-gray-400" />
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${roleBadge.bg}`}>
                          {roleBadge.label}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${statusBadge.bg}`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setShowEditModal(true);
                            }}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all"
                          >
                            <Edit className="w-4 h-4 text-indigo-400" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setShowDeleteConfirm(true);
                            }}
                            className="p-1.5 hover:bg-red-500/10 rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Previous</button>
            <button className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-xs text-white shadow-lg shadow-indigo-500/30">1</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">2</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">3</button>
            <button className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Add/Edit User Modal */}
      {(showAddModal || showEditModal) && (
        <UserModal
          isEdit={showEditModal}
          user={selectedUser}
          onClose={() => {
            setShowAddModal(false);
            setShowEditModal(false);
            setSelectedUser(null);
          }}
          onSave={(userData) => {
            if (showEditModal) {
              setUsers(users.map((u) => u.id === userData.id ? userData : u));
            } else {
              setUsers([{ ...userData, id: users.length + 1 }, ...users]);
            }
            setShowAddModal(false);
            setShowEditModal(false);
            setSelectedUser(null);
          }}
          roles={roles}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && selectedUser && (
        <DeleteConfirmModal
          user={selectedUser}
          onConfirm={handleDeleteUser}
          onCancel={() => {
            setShowDeleteConfirm(false);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
}

// User Modal Component
const UserModal = ({ isEdit, user, onClose, onSave, roles }) => {
  const [formData, setFormData] = useState({
    id: user?.id || Date.now(),
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "healthcare_practitioner",
    status: user?.status || "active",
    company: user?.company || "",
    licenseId: user?.licenseId || "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const selectedRole = roles.find((r) => r.value === formData.role);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-md shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
              {isEdit ? "Edit User" : "Add New User"}
            </h2>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Phone</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all"
            />
          </div>

          {!isEdit && (
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
            >
              {roles.map((role) => (
                <option key={role.value} value={role.value}>{role.label}</option>
              ))}
            </select>
          </div>

          {formData.role === "exhibitor" || formData.role === "sponsor" ? (
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Company Name</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all"
              />
            </div>
          ) : formData.role === "healthcare_practitioner" ? (
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">License ID</label>
              <input
                type="text"
                value={formData.licenseId}
                onChange={(e) => setFormData({ ...formData, licenseId: e.target.value })}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-all"
              />
            </div>
          ) : null}

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              {isEdit ? "Save Changes" : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Delete Confirmation Modal
const DeleteConfirmModal = ({ user, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl w-full max-w-sm shadow-2xl border border-white/20 animate-in zoom-in-95 duration-300">
        <div className="relative p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
            <Trash2 className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Delete User</h3>
          <p className="text-sm text-gray-300 mb-6">
            Are you sure you want to delete <span className="text-white font-medium">{user?.name}</span>? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};